import { test } from "node:test";
import assert from "node:assert/strict";
import { GetAllTasksUseCase } from "./GetAllTasksUseCase.js";
import { Task } from "../../domain/Task.js";
import { TaskRepository } from "../ports/out/TaskRepository.js";

class FakeTaskRepository implements TaskRepository {
    async findAll(): Promise<Task[]> {
        return [Task.create("1", "A", "user-1"), Task.create("2", "B", "user-2")];
    }
}

test("returns every task from the repository", async () => {
    const useCase = new GetAllTasksUseCase(new FakeTaskRepository());

    const tasks = await useCase.execute();

    assert.equal(tasks.length, 2);
    assert.equal(tasks[0].title, "A");
});
