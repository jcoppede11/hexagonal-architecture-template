import { User } from "../../../../domain/User.js";
import { EmailNotifier } from "../../../../application/ports/out/EmailNotifier.js";

export class ConsoleEmailNotifier implements EmailNotifier {
    async sendWelcome(user: User): Promise<void> {
        console.log("Welcome: ", `${user.fullName}`);
    }
}
