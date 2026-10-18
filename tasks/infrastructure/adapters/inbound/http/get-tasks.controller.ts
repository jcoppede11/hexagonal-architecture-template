import { Controller, Get, Inject } from "@nestjs/common";
import { Task } from "../../../../domain/Task.js";
import { GetAllTasks } from "../../../../application/ports/in/GetAllTasks.js";
import { GET_ALL_TASKS } from "../../../tokens.js";

@Controller("tasks")
export class GetTasksController {
    constructor(@Inject(GET_ALL_TASKS) private readonly getAllTasks: GetAllTasks) {}

    @Get()
    async handle(): Promise<Task[]> {
        return this.getAllTasks.execute();
    }
}
