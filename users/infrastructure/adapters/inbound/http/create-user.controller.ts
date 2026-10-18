import { Body, Controller, HttpCode, Inject, Post } from "@nestjs/common";
import { CreateUser } from "../../../../application/ports/in/CreateUser.js";
import { CREATE_USER } from "../../../tokens.js";
import { createUserSchema, CreateUserDto } from "./create-user.schema.js";

@Controller("users")
export class CreateUserController {
    constructor(@Inject(CREATE_USER) private readonly createUser: CreateUser) {}

    @Post()
    @HttpCode(201)
    async handle(
        @Body({ schema: createUserSchema }) body: CreateUserDto,
    ): Promise<{ message: string }> {
        await this.createUser.execute(body);
        return { message: "User created" };
    }
}
