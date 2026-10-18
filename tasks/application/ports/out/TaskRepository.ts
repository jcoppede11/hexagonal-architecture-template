import { Task } from "../../../domain/Task.js";

export interface TaskRepository {
    findAll(): Promise<Task[]>;
}
