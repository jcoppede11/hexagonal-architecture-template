import { User } from "../../../domain/User.js";

export interface UserRepository {
    save(user: User): Promise<void>;
}
