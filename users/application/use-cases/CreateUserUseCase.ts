import { User } from "../../domain/User.js";
import { CreateUserCommand } from "../commands/CreateUserCommand.js";
import { CreateUser } from "../ports/in/CreateUser.js";
import { UserRepository } from "../ports/out/UserRepository.js";
import { EmailNotifier } from "../ports/out/EmailNotifier.js";

export class CreateUserUseCase implements CreateUser {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly emailNotifier: EmailNotifier,
    ) {}

    async execute(command: CreateUserCommand): Promise<void> {
        const user = User.create(command.firstName, command.lastName, command.email);
        await this.userRepository.save(user);
        await this.emailNotifier.sendWelcome(user);
    }
}
