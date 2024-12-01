---
outline: deep
---

# Global State

Vue 3's recommended solution for global state management is [Pinia](https://pinia.vuejs.org/), the successor to [Vuex](https://vuex.vuejs.org/). It provides a convenient way to update and access shared global state throughout your application.

## Design Philosophy

When creating a store, follow the Flow principles shown in the diagram below:

![one way data flow](img/one-way-data-flow.png)

Based on the [Redux documentation](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-terminology), Pinia store implements Redux's core concept of "one-way data flow" through three main components:

1. `store`: Contains the store's state. As a private property, it must use a [leading underscore](./typescript-convention.md#class-%E9%A1%9E%E5%88%A5) in its name and **cannot** be accessed outside the store
2. `action`: Functions that update the store's state, ideally implemented as **synchronous functions**
3. `getter`: Functions that retrieve store state using `computed` properties

## Scope of Responsibilities

Pinia stores shared data between pages and UI components, eliminating the need for [prop drilling](https://vuejs.org/guide/components/provide-inject#prop-drilling).

To understand how responsibilities are divided between global state and global events, see [here](./global-state.md).

## Store Example

Pinia Store can be written in two ways: [Options Store](https://pinia.vuejs.org/core-concepts/#Option-Stores) and [Setup Store](https://pinia.vuejs.org/core-concepts/#Setup-Stores). Let's look at an example using the Setup Store approach:

```ts
import { defineStore } from 'pinia';

const useMyStore = defineStore('myStore', () => {
  // store, state
  const _globalState = ref<string>('hello from pinia');

  // actions
  const updateState = (newValue: string) => (_globalState.value = newValue);

  // computed, getter
  const getGlobalState = computed<string>(() => _globalState.value);

  return { getGlobalState, updateState };
});

export default useMyStore;
```
