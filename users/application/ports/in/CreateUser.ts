import { CreateUserCommand } from "../../commands/CreateUserCommand.js";

export interface CreateUser {
    execute(command: CreateUserCommand): Promise<void>;
}
