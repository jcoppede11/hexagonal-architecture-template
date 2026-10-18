import { DomainError } from "../../shared/domain/DomainError.js";

export class IdRequiredError extends DomainError {
    constructor() {
        super("id is required");
    }
}

export class TitleRequiredError extends DomainError {
    constructor() {
        super("title is required");
    }
}

export class UserIdRequiredError extends DomainError {
    constructor() {
        super("userId is required");
    }
}
