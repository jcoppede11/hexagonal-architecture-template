import { Task } from "../../domain/Task.js";
import { GetAllTasks } from "../ports/in/GetAllTasks.js";
import { TaskRepository } from "../ports/out/TaskRepository.js";

export class GetAllTasksUseCase implements GetAllTasks {
    constructor(private readonly taskRepository: TaskRepository) {}

    async execute(): Promise<Task[]> {
        return this.taskRepository.findAll();
    }
}
