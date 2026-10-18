/**
 * Base class for all domain errors. Infrastructure maps these to transport
 * responses (see DomainExceptionFilter), keeping domain/application unaware of HTTP.
 */
export abstract class DomainError extends Error {
    constructor(message: string) {
        super(message);
        this.name = new.target.name;
    }
}
