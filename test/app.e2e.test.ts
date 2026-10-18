import { after, before, describe, it } from "node:test";
import assert from "node:assert/strict";
import { INestApplication, StandardSchemaValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import request from "supertest";
import { AppModule } from "../app.module.js";
import { DomainExceptionFilter } from "../shared/infrastructure/http/domain-exception.filter.js";

describe("App (e2e)", () => {
    let app: INestApplication;

    before(async () => {
        const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
        app = moduleRef.createNestApplication();
        app.useGlobalPipes(new StandardSchemaValidationPipe());
        app.useGlobalFilters(new DomainExceptionFilter());
        await app.init();
    });

    after(async () => {
        await app.close();
    });

    it("POST /users creates a user", async () => {
        await request(app.getHttpServer())
            .post("/users")
            .send({ firstName: "Ada", lastName: "Lovelace", email: "ada@math.org" })
            .expect(201, { message: "User created" });
    });

    it("POST /users rejects an invalid payload", async () => {
        await request(app.getHttpServer())
            .post("/users")
            .send({ firstName: "Ada" })
            .expect(400);
    });

    it("GET /tasks returns all tasks", async () => {
        const response = await request(app.getHttpServer()).get("/tasks").expect(200);
        assert.equal(response.body.length, 3);
    });
});
