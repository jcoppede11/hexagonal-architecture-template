import { User } from "../../../domain/User.js";

export interface EmailNotifier {
    sendWelcome(user: User): Promise<void>;
}
