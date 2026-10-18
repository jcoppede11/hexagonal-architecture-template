import { FirstNameRequiredError, InvalidEmailError, LastNameRequiredError } from "./UserErrors.js";

export class User {
    private constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly email: string,
    ) {}

    static create(firstName: string, lastName: string, email: string): User {
        const trimmedFirst = firstName.trim();
        const trimmedLast = lastName.trim();
        const trimmedEmail = email.trim().toLowerCase();

        if (!trimmedFirst) throw new FirstNameRequiredError();
        if (!trimmedLast) throw new LastNameRequiredError();
        if (!trimmedEmail.includes("@")) throw new InvalidEmailError();

        return new User(trimmedFirst, trimmedLast, trimmedEmail);
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
