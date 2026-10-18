import { Module } from "@nestjs/common";
import { GetTasksController } from "./adapters/inbound/http/get-tasks.controller.js";
import { InMemoryTaskRepository } from "./adapters/outbound/persistence/in-memory-task.repository.js";
import { GetAllTasksUseCase } from "../application/use-cases/GetAllTasksUseCase.js";
import { TaskRepository } from "../application/ports/out/TaskRepository.js";
import { GET_ALL_TASKS, TASK_REPOSITORY } from "./tokens.js";

@Module({
    controllers: [GetTasksController],
    providers: [
        { provide: TASK_REPOSITORY, useClass: InMemoryTaskRepository },
        {
            provide: GET_ALL_TASKS,
            useFactory: (taskRepository: TaskRepository) => new GetAllTasksUseCase(taskRepository),
            inject: [TASK_REPOSITORY],
        },
    ],
})
export class TasksModule {}
