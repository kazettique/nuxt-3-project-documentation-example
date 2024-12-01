---
outline: deep
---

# Quickstart

## Prerequisites

1. Check Node version

Verify that your Node version matches `.nvmrc`. If it doesn't, use [NVM](https://github.com/nvm-sh/nvm) to switch to the correct version.

2. Install NPM

```bash
npm i
```

3. Copy Env file to local

```bash
cp .env.example .env
```

## Startup Project

```bash
npm run dev
```

Or use custom CLI:

```bash
npm run dev:adv
```

## Run TypeScript Type Checking

Run type checking for the entire project

```bash
npm run type-check
```

## Run ESLint Check And Formatting

```bash
npm run lint:eslint-fix
```

## Developerment Tools

### IDE

We recommend using [VSCode](https://code.visualstudio.com/) for development

### Extensions

We recommend these VSCode extensions to enhance your development workflow and experience:

- [Vue - Official - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Code Spell Checker - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [es6-string-html - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)
- [XState VSCode - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=statelyai.stately-vscode)

For a complete list of recommended VSCode extensions, check `.vscode/extensions.json`
