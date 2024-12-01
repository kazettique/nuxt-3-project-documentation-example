---
outline: deep
---

# Configuration

## Env Files

| Env          |                                                                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .env         | The local development environment configuration file is not tracked in Git version control. Copy the contents of `.env.example` to create your own configuration file. |
| .env.example | Local environment                                                                                                                                                      |
| .env.dev     | DEV environment                                                                                                                                                        |
| .env.stage   | STAGE environment                                                                                                                                                      |
| .env.uat     | UAT environment                                                                                                                                                        |
| .env.prod    | PROD environment                                                                                                                                                       |

## Eslint

- Config: `.eslintrc.js`
- Blacklist: `.eslintignore`

## Prettier

- Config: `.prettierrc`

## PM2

- All env config: `ecosystem.config.js`
- Dev env config: `ecosystem.dev.config.js`

## Nuxt Config

`nuxt.config.ts`, config for Nuxt

## Tailwind Config

`tailwind.config.js`, config for Tailwind

## Fantasticon

`.fantasticonrc.js`, config for [fantasticon](https://github.com/tancredi/fantasticon)

## TypeScript Config

### global.d.ts

Defines environment models and extends the `Window` interface models

### index.d.ts

:::info
Currently not in use
:::

### TS Config

`tsconfig.json`: The extensible TypeScript configuration file

## customScript.js

A custom interactive script that runs with the NPM script `dev:adv`. You can modify and update it to suit your preferences.
