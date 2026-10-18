import { Module } from "@nestjs/common";
import { CreateUserController } from "./adapters/inbound/http/create-user.controller.js";
import { InMemoryUserRepository } from "./adapters/outbound/persistence/in-memory-user.repository.js";
import { ConsoleEmailNotifier } from "./adapters/outbound/notifications/console-email.notifier.js";
import { CreateUserUseCase } from "../application/use-cases/CreateUserUseCase.js";
import { UserRepository } from "../application/ports/out/UserRepository.js";
import { EmailNotifier } from "../application/ports/out/EmailNotifier.js";
import { CREATE_USER, EMAIL_NOTIFIER, USER_REPOSITORY } from "./tokens.js";

@Module({
    controllers: [CreateUserController],
    providers: [
        { provide: USER_REPOSITORY, useClass: InMemoryUserRepository },
        { provide: EMAIL_NOTIFIER, useClass: ConsoleEmailNotifier },
        {
            provide: CREATE_USER,
            useFactory: (userRepository: UserRepository, emailNotifier: EmailNotifier) =>
                new CreateUserUseCase(userRepository, emailNotifier),
            inject: [USER_REPOSITORY, EMAIL_NOTIFIER],
        },
    ],
})
export class UsersModule {}
