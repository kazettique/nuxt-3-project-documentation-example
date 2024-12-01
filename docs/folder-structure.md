---
outline: deep
---

# Folder Structure

The project follows the folder structure defined in the [Nuxt3 official documentation](https://nuxt.com/). Here's the complete structure:

```txt
.
├── .nuxt
├── .vscode
├── docs/
│   ├── .vitepress/
│   │   └── config.ts
│   └── [document].md
├── logs/
│   └── [somgLogs].log
├── node_modules
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── basic/
│   │   ├── common/
│   │   ├── form/
│   │   ├── formBasic/
│   │   ├── section/
│   │   └── ...other components
│   ├── composables/
│   ├── constants/
│   │   ├── form
│   │   └── ...other constants
│   ├── layouts/
│   ├── machines/
│   │   └── form/
│   │       ├── donatePayment.ts
│   │       └── memberPlanPayment.ts
│   ├── middleware/
│   ├── mock/
│   ├── pages/
│   ├── plugins/
│   ├── providers/
│   ├── public/
│   ├── repository/
│   │   ├── modules/
│   │   │   ├── article.ts
│   │   │   ├── author.ts
│   │   │   └── ...other modules
│   │   ├── factory.ts
│   │   ├── nuxtHttpBase.ts
│   │   └── phpHttpBase.ts
│   ├── server/
│   │   ├── api/
│   │   ├── middleware/
│   │   └── plugins/
│   ├── services/
│   │   ├── globalEvent.ts
│   │   ├── menuEvent.ts
│   │   ├── storePortalEvent.ts
│   │   └── ...other global events
│   ├── stores/
│   ├── transformer/
│   │   ├── article.ts
│   │   ├── author.ts
│   │   └── ...other data transformers
│   ├── types/
│   │   ├── formModels/
│   │   ├── models/
│   │   │   ├── article.ts
│   │   │   ├── articleCount.ts
│   │   │   ├── author.ts
│   │   │   └── ...other models
│   │   ├── payloads/
│   │   │   ├── article.ts
│   │   │   ├── articleCount.ts
│   │   │   ├── author.ts
│   │   │   └── ...other payloads
│   │   ├── queryStringModels/
│   │   ├── routeParamModels/
│   │   ├── viewModels/
│   │   │   ├── article.ts
│   │   │   ├── articleCount.ts
│   │   │   ├── author.ts
│   │   │   └── ...other view models
│   │   ├── base.ts
│   │   ├── caseTransform.ts
│   │   ├── enums.ts
│   │   ├── iconTypes.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── base.ts
│   │   ├── common.ts
│   │   └── ...other util functions
│   ├── validators/
│   │   ├── formModels/
│   │   ├── models/
│   │   ├── queryStringModels/
│   │   ├── routeParamModels/
│   │   └── viewModels/
│   ├── app.vue
│   └── error.vue
├── .env
├── .env.dev
├── .env.example
├── .env.prod
├── .env.stage
├── .env.uat
├── .eslintignore
├── .eslintrc.js
├── .fantasticonrc.js
├── .gitignore
├── .nvmrc
├── .prettierrc
├── .stylelintrc.js
├── customScript.js
├── deploy.sh
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── Dockerfile
├── ecosystem.config.js
├── ecosystem.dev.config.js
├── global.d.ts
├── index.d.ts
├── nuxt.config.ts
├── package.json
├── package-lock.json
├── README.md
├── robots.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Nuxt Pre-defined Folders

Nearly all files are located under the `src` directory. For information about Nuxt-specific directories, please refer to the [Nuxt Directory Structure](https://nuxt.com/docs/guide/directory-structure/app) documentation.

## Custom Folders

Additionally, there are several non-Nuxt directories in the project structure:

- `docs`: Contains project documentation in Markdown format and Vitepress configuration files
- `logs`: Stores error log files (implementation in progress)
- `src`: Houses all development files, organized into specialized directories:
  - `src/repository`: [Request Repository](./repository.md)
  - `src/services`: Houses Instance Services for Global Events - see [Global Event](./global-event.md)
  - `src/transformer`: Contains data transformation functions - see [Data Transformer](./data-transformer.md)
  - `src/types`: Stores all data model definitions - see [Data Model](./data-model.md)
  - `src/utils`: Contains utility functions
- Configuration files: Contains environment settings (`.env` and related files) and other configurations - see [Configurations](./configurations.md)
