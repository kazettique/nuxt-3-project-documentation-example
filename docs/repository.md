---
outline: deep
---

# Fetcher Repository

All asynchronous request functions reside in `src/repository/` and fall into two categories:

1. Nuxt Fetcher: Handles asynchronous requests between frontend pages and the Nuxt server API
2. PHP Fetcher: Manages asynchronous requests between the Nuxt API and PHP API

:::info
The functionality of these function implementations resembles that of the [tRPC](https://trpc.io/) package
:::

:::tip
A `[N]` prefix in an API error message indicates it originated from the Nuxt API, while errors without this prefix come from PHP
:::
