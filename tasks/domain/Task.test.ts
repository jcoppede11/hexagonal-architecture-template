import { test } from "node:test";
import assert from "node:assert/strict";
import { Task } from "./Task.js";
import { IdRequiredError, TitleRequiredError, UserIdRequiredError } from "./TaskErrors.js";

test("creates a task, trimming its fields", () => {
    const task = Task.create("  1  ", "  Write the report  ", "  user-1  ");

    assert.equal(task.id, "1");
    assert.equal(task.title, "Write the report");
    assert.equal(task.userId, "user-1");
});

test("rejects a blank id", () => {
    assert.throws(() => Task.create("   ", "Write the report", "user-1"), IdRequiredError);
});

test("rejects a blank title", () => {
    assert.throws(() => Task.create("1", "   ", "user-1"), TitleRequiredError);
});

test("rejects a blank userId", () => {
    assert.throws(() => Task.create("1", "Write the report", "   "), UserIdRequiredError);
});
