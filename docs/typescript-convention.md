---
outline: deep
---

# TypeScript Principles

The rules here are primarily based on the [StyleGuide - TypeScript Deep Dive](https://basarat.gitbook.io/typescript/styleguide).

## Interface

`Interface` should be named using `PascalCase`, without the `I` prefix. For example:

```ts
interface ArticleAuthor {
  // ...
}
```

## Type

For `type` declarations that are not semantically meaningful, do not add the "type" suffix.

### Union

For union types, we recommend first defining them asenumtypes before converting them. Here's how to do it:

```ts
enum HttpMethodType {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

type HttpMethod = `${HttpMethodType}`;
```

:::tip
Since eslint doesn't check for duplicate strings (or numbers) in union types, but `enum` doesn't allow duplicate key values, it's easier to manage.
:::

## Enum

1. `enum` uses `PascalCase`, does not need the enum suffix, and **if appropriate** can include a type suffix
2. `enum` type members use `PascalCase`; member **values** use `SCREAMING_SNAKE_CASE`, `camelCase`, `PascalCase` strings or numbers (depending on the usage context)

For example:

```typescript
enum ArticleBlockType {
  TEXT = 'TEXT',
  IMG = 'IMG',
  EMBED = 'EMBED',
  AD = 'AD',
  OTHER = 'OTHER',
}

enum PublicStatus {
  PRIVATE,
  PUBLIC,
}
```

## Class

- Class names use `PascalCase`, and their members and methods use `camelCase` (example: `MyClass`).
- All class members and methods should specify **access modifiers** (`public`, `private`, `protected`). Private members must be prefixed with an underscore, like `_myPrivateMember`.

For example:

```typescript
class MyClass {
  constructor(){
    // do something...
  }

  public myPublicMember: string = 'hello';
  private _myPrivateMember: string = 'secretToken';
  protected myProtectedMember: string = 'protectedToken';
  readonly myReadOnlyMember: number = 5566;

  public myPublicMethod() {
    // ...
  }

  private _myPrivateMethod() {
    // ...
  }

  public get myGetterMethod() {
    // ...
  }

  public static myStaticMethod() {
    // ...
  }
}
```

## Constant

Constants must be named in `SCREAMING_SNAKE_CASE` format, for example:

```typescript
const FULL_DATA_TIME_FORMAT: string = 'YYYY-MM-DD HH:mm:ss';
```

## Reference

- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [Coding guidelines · microsoft/TypeScript Wiki](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
- [StyleGuide - TypeScript Deep Dive](https://basarat.gitbook.io/typescript/styleguide)
- [Introduction · typescript](https://unional.gitbooks.io/typescript/content/)
- [Redux Fundamentals, Part 2: Concepts and Data Flow | Redux](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-terminology)
- [Naming Conventions — Camel Case, Pascal Case, Kebab Case, and More | by Code Ceeker | Medium](https://medium.com/@code.ceeker/naming-conventions-camel-case-pascal-case-kebab-case-and-more-dc4e515b9652)
