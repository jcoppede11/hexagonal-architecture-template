import { test } from "node:test";
import assert from "node:assert/strict";
import { CreateUserUseCase } from "./CreateUserUseCase.js";
import { User } from "../../domain/User.js";
import { UserRepository } from "../ports/out/UserRepository.js";
import { EmailNotifier } from "../ports/out/EmailNotifier.js";

class FakeUserRepository implements UserRepository {
    readonly saved: User[] = [];
    async save(user: User): Promise<void> {
        this.saved.push(user);
    }
}

class FakeEmailNotifier implements EmailNotifier {
    readonly welcomed: User[] = [];
    async sendWelcome(user: User): Promise<void> {
        this.welcomed.push(user);
    }
}

test("persists the user and sends a welcome email", async () => {
    const repository = new FakeUserRepository();
    const notifier = new FakeEmailNotifier();
    const useCase = new CreateUserUseCase(repository, notifier);

    await useCase.execute({ firstName: "Ada", lastName: "Lovelace", email: "ADA@math.org" });

    assert.equal(repository.saved.length, 1);
    assert.equal(repository.saved[0].email, "ada@math.org");
    assert.equal(notifier.welcomed.length, 1);
});

test("rejects an invalid email and persists nothing", async () => {
    const repository = new FakeUserRepository();
    const useCase = new CreateUserUseCase(repository, new FakeEmailNotifier());

    await assert.rejects(() =>
        useCase.execute({ firstName: "Ada", lastName: "Lovelace", email: "not-an-email" }),
    );
    assert.equal(repository.saved.length, 0);
});
