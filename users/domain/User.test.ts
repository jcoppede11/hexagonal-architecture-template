import { test } from "node:test";
import assert from "node:assert/strict";
import { User } from "./User.js";
import { FirstNameRequiredError, InvalidEmailError, LastNameRequiredError } from "./UserErrors.js";

test("creates a user, trimming fields and lowercasing the email", () => {
    const user = User.create("  Ada  ", "  Lovelace  ", "  ADA@Math.org  ");

    assert.equal(user.firstName, "Ada");
    assert.equal(user.lastName, "Lovelace");
    assert.equal(user.email, "ada@math.org");
});

test("exposes the full name", () => {
    const user = User.create("Ada", "Lovelace", "ada@math.org");

    assert.equal(user.fullName, "Ada Lovelace");
});

test("rejects a blank first name", () => {
    assert.throws(() => User.create("   ", "Lovelace", "ada@math.org"), FirstNameRequiredError);
});

test("rejects a blank last name", () => {
    assert.throws(() => User.create("Ada", "   ", "ada@math.org"), LastNameRequiredError);
});

test("rejects an email without @", () => {
    assert.throws(() => User.create("Ada", "Lovelace", "not-an-email"), InvalidEmailError);
});
