---
outline: deep
---

# Data Transformer

## Design Philosophy

API responses often require reformatting to meet UI requirements, which is why we implement [view models](./data-model.md#view-model-%E8%A6%96%E5%9C%96%E6%A8%A1%E5%9E%8B).

Data transformers were introduced to implement the DTO design pattern ([DTO Pattern](https://www.baeldung.com/java-dto-pattern)), creating a clear separation between backend data models and frontend view models. These transformed data structures are known as [Data Transfer Objects](https://learn.microsoft.com/zh-tw/aspnet/web-api/overview/data/using-web-api-with-entity-framework/part-5) (DTOs). As noted in [Wikipedia](https://en.wikipedia.org/wiki/Data_transfer_object), view models themselves can be considered DTOs.

## Usage Scope

Contains all **data transformation** functions, organized by *entity*. For instance, both `article` and `pushArticle` are grouped within the `ArticleDataTransformer` class in `article.ts`, following this pattern for other entities.
