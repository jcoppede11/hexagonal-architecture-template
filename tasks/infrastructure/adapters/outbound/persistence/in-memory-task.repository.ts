import { Task } from "../../../../domain/Task.js";
import { TaskRepository } from "../../../../application/ports/out/TaskRepository.js";

export class InMemoryTaskRepository implements TaskRepository {
    private readonly tasks: Task[] = [
        Task.create("1", "Write the report", "a1f8c3e2-9b4d-4f6a-8e21-7c5d0b2a1f90"),
        Task.create("2", "Review the PRs", "a1f8c3e2-9b4d-4f6a-8e21-7c5d0b2a1f90"),
        Task.create("3", "Deploy to staging", "b2e9d4f3-0c5e-4a7b-9f32-8d6e1c3b2a01"),
    ];

    async findAll(): Promise<Task[]> {
        return this.tasks;
    }
}
