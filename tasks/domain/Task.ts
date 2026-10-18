import { IdRequiredError, TitleRequiredError, UserIdRequiredError } from "./TaskErrors.js";

export class Task {
    private constructor(
        readonly id: string,
        readonly title: string,
        readonly userId: string,
    ) {}

    static create(id: string, title: string, userId: string): Task {
        const trimmedId = id.trim();
        const trimmedTitle = title.trim();
        const trimmedUserId = userId.trim();

        if (!trimmedId) throw new IdRequiredError();
        if (!trimmedTitle) throw new TitleRequiredError();
        if (!trimmedUserId) throw new UserIdRequiredError();

        return new Task(trimmedId, trimmedTitle, trimmedUserId);
    }
}
