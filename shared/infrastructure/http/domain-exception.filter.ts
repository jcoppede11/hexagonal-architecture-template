import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { DomainError } from "../../domain/DomainError.js";

interface HttpResponse {
    status(code: number): { json(body: unknown): void };
}

/**
 * Translates any DomainError thrown by the application/domain layers into a
 * 400 response, so those layers never depend on HTTP concerns.
 */
@Catch(DomainError)
export class DomainExceptionFilter implements ExceptionFilter {
    catch(error: DomainError, host: ArgumentsHost): void {
        const response = host.switchToHttp().getResponse<HttpResponse>();

        response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: HttpStatus.BAD_REQUEST,
            error: error.name,
            message: error.message,
        });
    }
}
