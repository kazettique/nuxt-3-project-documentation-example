---
outline: deep
---

# Data Validator

## Design Philosophy

TypeScript's model definitions and type constraints significantly reduce development errors. While TypeScript handles static checking, it cannot assist with runtime validation—making it crucial to validate **actual data** during runtime. This project uses the [zod](https://zod.dev) package for this purpose.

The process consists of three steps:

1. Define models
2. Define data validators based on the models
3. Execute data validation

Both models and validators constrain the **shape** of data, but in different ways: models handle static data (before runtime), while validators manage dynamic data (during runtime). Validators can also implement stricter limitations, as we'll explore later.

Following the principle of "Single Source of Truth" ([Single Source of Truth](https://en.wikipedia.org/wiki/Single_source_of_truth), SSOT), the model serves as our **truth**. While validators are derived from the model and can enforce strict validation rules, they must operate within the model's constraints. In the end, all data must conform to the validator's specifications.

## Example

Based on our predefined [models](https://www.notion.so/kazettique/data-model.md), we leverage zod's `ZodSchema` method to infer models and create data validators. Let's look at MKeywordBaseValidator as an example (found in `/src/validators/models/keyword.ts`):

```typescript
import { z } from 'zod';
import { MKeywordBase } from '@/types';

export const MKeywordBaseValidator: z.ZodSchema<MKeywordBase> = z.object({
  id: z.number(),
  lastUseAt: z.string().nullable(),
  path: z.string().nullable(),
  public: z.number(),
  status: z.number(),
  title: z.string(),
  webSiteId: z.number(),
});
```

## Stricter Constraints

TypeScript's type constraints have inherent limitations. This is where zod provides more granular validation capabilities.

For instance, while some programming languages can distinguish between integers and floating-point numbers, TypeScript (and JavaScript) only offer a generic `number` type. Zod fills this gap by enabling more precise constraints, as demonstrated in the middleware idGuard (located in `src/middleware/idGuard.ts`):

```typescript
import { z } from 'zod';

export default defineNuxtRouteMiddleware((to, _from) => {
  const isValid: boolean = z.coerce.number().int().positive().safeParse(to.params.id).success;

  if (!isValid) {
    return navigateTo('/');
  }
});
```

The searched `id` must be from the database's Primary Key (PK) and is defined as a **positive integer**—*excluding floating-point numbers, zero, and negative numbers*. Here's how the model definition works:

```typescript
type Id = number;
```

Since only positive integers are considered **valid** values in practice, we use zod to enforce stricter constraints:

```typescript
const idValidator = z.coerce.number().int().positive();
```

The line above uses zod to restrict the `id` value to be not just a number, **but also** specifically a positive integer.

This ensures that any invalid values will be caught and rejected.

:::info
Here, we use zod's `coerce` function to convert the URL parameter `id` from a string to a number before validation
:::

## Use Cases

Data validation can be applied wherever runtime checks are needed. Our current implementations include:

- Form validation
- Nuxt Route Middleware (`/src/middleware`)
- Data transformers (`src/transformer`)
