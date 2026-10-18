import { DomainError } from "../../shared/domain/DomainError.js";

export class FirstNameRequiredError extends DomainError {
    constructor() {
        super("firstName is required");
    }
}

export class LastNameRequiredError extends DomainError {
    constructor() {
        super("lastName is required");
    }
}

export class InvalidEmailError extends DomainError {
    constructor() {
        super("email is invalid");
    }
}
