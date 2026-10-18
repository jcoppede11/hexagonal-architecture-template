import "reflect-metadata";
import { StandardSchemaValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { DomainExceptionFilter } from "./shared/infrastructure/http/domain-exception.filter.js";

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new StandardSchemaValidationPipe());
    app.useGlobalFilters(new DomainExceptionFilter());

    const port = Number(process.env.PORT) || 3000;
    await app.listen(port);
    console.log(`Server listening on http://localhost:${port}`);
}

void bootstrap();
