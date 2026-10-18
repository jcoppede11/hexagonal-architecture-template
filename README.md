# Hexagonal Architecture Template (NestJS + TypeScript)

Starter that keeps **domain** and **application** as framework-free TypeScript and confines **NestJS** to the edges — Ports & Adapters you can clone, test, and extend.

**Highlights:** inward dependencies, two sample bounded contexts (`users`, `tasks`), e2e coverage, modern tooling (TS 7, oxlint).

## Principles

- **Dependencies point inward:** `infrastructure → application → domain`.
- **Business logic stays pure:** no `@nestjs/*` under `domain/` or `application/`.
- **Features are slices:** each module owns its domain, use cases, and adapters.

## Structure

```
<feature>/                 # users/, tasks/
  domain/                  # entities & errors (PascalCase)
  application/             # ports, commands, use cases
  infrastructure/          # Nest module, HTTP, persistence (kebab-case)
shared/                    # shared domain errors & HTTP filters
main.ts · app.module.ts · test/
```

New feature? Copy `users/` and wire it in `app.module.ts`.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm test             # node:test + supertest (unit & e2e)
npm run typecheck && npm run lint
```

Try `POST /users` `{ firstName, lastName, email }` and `GET /tasks`.

## Stack

NestJS 12 · TypeScript 7 · Zod · tsx · oxlint · Prettier

> **TS 7 note:** pins the [native compiler](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/). Need [`typescript-eslint`](https://typescript-eslint.io/users/dependency-versions) (`<6.1.0`)? Use TS 5.9. [Oxlint](https://oxc.rs/docs/guide/usage/linter/migrate-from-eslint) works on TS 7 ([type-aware](https://oxc.rs/docs/guide/usage/linter/type-aware.html) optional).