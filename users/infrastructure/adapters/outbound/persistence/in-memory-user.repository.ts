import { User } from "../../../../domain/User.js";
import { UserRepository } from "../../../../application/ports/out/UserRepository.js";

export class InMemoryUserRepository implements UserRepository {
    private readonly users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user);
        console.log("User saved:", user.fullName, user.email);
    }
}
