import { Module } from "@nestjs/common";
import { UsersModule } from "./users/infrastructure/users.module.js";
import { TasksModule } from "./tasks/infrastructure/tasks.module.js";

@Module({
    imports: [UsersModule, TasksModule],
})
export class AppModule {}
