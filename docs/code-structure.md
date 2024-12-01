---
outline: deep
---

# Code Structure

## Basic Structure diagram

```mermaid
flowchart RL
  subgraph Browser
    subgraph Page
      Fetch
    end
  end

  subgraph Nuxt
    subgraph Nitro Server
      NuxtAPI
    end

    subgraph Data Transformer
      Transformer
    end

    subgraph Repository
      Fetch -->|call| NuxtFetcher
      NuxtFetcher -->|return| Fetch

      NuxtFetcher -->|request| NuxtAPI
      NuxtAPI -->|response| NuxtFetcher

      NuxtAPI -->|call| PhpFetcher
      PhpFetcher -->|return| NuxtAPI

      NuxtAPI -->|srcData| Transformer
      Transformer -->|transformedData| NuxtAPI
    end
  end

  subgraph Php Server
    PhpFetcher -->|request| PhpAPI
    PhpAPI -->|response| PhpFetcher
  end
```

## Article Components Relationship Diagram

The following is the relationship between each article related components:

```mermaid
flowchart TB
  ArticlePage("ArticlePage ('/src/pages/article/[id].vue')") --> ArticleOuterLayer["ArticleOuterLayer.vue"]

  ArticleOuterLayer --> ArticleMiddleLayer["ArticleMiddleLayer.vue"]
  ArticleOuterLayer --> ArticleMeta["ArticleMeta.vue Meta Setting"]

  ArticleMiddleLayer --> ArticleInnerLayer["ArticleInnerLayer.vue"]
  ArticleMiddleLayer --> BreadCrumb["BreadCrumb.vue"]

  ArticleMiddleLayer --> VideoWrapper(["VideoWrapper.vue"])
  VideoWrapper --> VideoSide(["VideoSide.vue Sidebar"])

  ArticleInnerLayer --> ArticleContent["ArticleContent.vue"]
  ArticleInnerLayer --> ArticleSide["ArticleSide.vue Sidebar]

  ArticleContent --> ArticleEditorContent["ArticleEditorContent.vue main articleHTML"]
```
