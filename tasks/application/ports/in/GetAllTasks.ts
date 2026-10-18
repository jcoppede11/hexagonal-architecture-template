import { Task } from "../../../domain/Task.js";

export interface GetAllTasks {
    execute(): Promise<Task[]>;
}
