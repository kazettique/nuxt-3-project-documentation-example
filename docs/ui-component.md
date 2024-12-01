---
outline: deep
---

# UI Component

## Component Category

### General Component

General components are minimum units, displaying data, interact with users

- Name component using `PascalCase`, and ***do not*** need the Component suffix
- Similar components should have the same prefix, also named in `PascalCase`, categorized as follows:
- `Article.vue`: Article-related components
- `Basic.vue`: Basic components
- `Form.vue`: Form-related components
- `Section.vue`: Homepage and channel page module-related components

### Layout Component

Provides different layout styles

Name layout component using `kebab-case`, for example: `default-gray.vue`

### Page Component

Page components serve as the **data management hub**, where most asynchronous requests are executed hear and passed down to all components who needed.

Name page component using either `camelCase` or `kebab-case` format **as needed**. Please refer to [Nuxt's official document](https://nuxt.com/docs/guide/directory-structure/pages).

### Section Component

Component for home and channel page.

Name section component using `PascalCase`, for example: `SectionTwoColumn.vue`.

## Assignment of Responsibilities

The responsibility for each components are shown below:

|                            | General Component | Layout Component | Page Component | Section Component |
| -------------------------- | ----------------- | ---------------- | -------------- | ----------------- |
| State                      | Mostly Stateless  | ❌                | ✅              | Mostly Stateless  |
| Props                      | ✅                 | ❌                | ❌              | ✅                 |
| Emits Event                | ✅                 | ❌                | ❌              | ✅                 |
| Slot                       | ✅                 | ✅                | ❌              | ✅                 |
| Communicate w/ Pinia Store | ✅                 | ✅                | ✅              | ✅                 |
| Execute Async Request      | ❌                 | ❌                | ✅              | ✅                 |

## Development Principles

### Single Root Template

Although Vue 3 has removed the single-root template restriction that existed in previous versions, BUT due to **CSS considerations**, single-root templates are less likely to be affected by external CSS (such as `display: block;` or `display: flex;`), therefore we have decided to continue using single-root templates.

Related rule settings are located in `.eslintrc.js`:

```js
module.exports = {
  // ...
  rules: {
    // ...
    'vue/no-multiple-template-root': 'warn',
    // ...
  },
};
```

### Avoid Shorthand Syntax

The colon shorthand for`v-bind` appears in many contexts. (objects, parameter types, ternary operations, CSS, etc.) Using the full syntax makes global searching easier and maintains consistency with other Vue directives (such as `v-if`,`v-for`). Therefore, we use the longhand format for `props`, `event`, and `slot`.

Do:

```html
<div v-on:click="foo" v-bind:hello="bar" />
```

Don't:

```html
<div @click="foo" :hello="bar" />
```

The rules are located in `.eslintrc.js`:

```js
module.exports = {
  // ...
  rules: {
    // ...
    'vue/v-on-style': ['error', 'longform'],
    'vue/v-bind-style': ['error', 'longform'],
    'vue/v-slot-style': ['error', 'longform'],
    // ...
  },
};
```

### Minimize State As Less As Possible

Minimize the number of data states stored by making good use of Vue's `computed` method, for example:

```typescript
// state
const num = ref<number>(2);
// computed value
const squaredNum = computed<number>(() => number ** 2); // output: 4

// state
const firstName = ref<string>("John");
const lastName = ref<string>("Doe");
const proNoun = ref<string>("Mr.");
// computed value
const fullName = computed<string>(() => firstName.value + " " + lastName.value); // output: "John Doe"
const displayName = computed<string>(() => proNoun.value + " " + fullName.value); // output: "Mr. John Doe"
```

### Lifecycle: Vue vs. Nuxt

While Nuxt is built on Vue, it handles both browser-side and server-side tasks (such as SSR generating HTML pages). As a result, Vue and Nuxt maintain separate lifecycles. Here are some documentation and reference articles:

- [Lifecycle Hooks · Nuxt Advanced](https://nuxt.com/docs/guide/going-further/hooks)
- [Lifecycle Hooks | Vue.js](https://vuejs.org/guide/essentials/lifecycle)
