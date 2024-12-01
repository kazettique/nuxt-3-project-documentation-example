---
outline: deep
---

# Global Event

Due to Vue 3's [removal of the Event Bus API](https://v3-migration.vuejs.org/breaking-changes/events-api), we now implement this functionality using the [Mitt](https://github.com/developit/mitt) package.

## Design Philosophy

Global events have the following key characteristics:

1. **Volatility**: Used for "volatile data" where state persistence isn't necessary
2. **Fire and Forget**: Events operate on a "Fire & Forget" principle—the outcome of the event trigger isn't monitored
3. **Broadcasting**: Employs a broadcasting mechanism where all event listeners receive the message, making it inherently shareable
4. **Teleportation**: Functions similarly to Vue's [Provide / Inject](https://vuejs.org/guide/components/provide-inject) or React's [Context](https://react.dev/reference/react/useContext) for cross-level component communication. Unlike these systems, which are **confined** to UI component lifecycles, global events can operate without such limitations. This allows data transport from state machines to Pinia, even though state machines operate independently of Vue's state management system.

## Scope of Responsibilities

Global events and Pinia's global state functionality share many similarities, with volatility being the key distinction—specifically, whether state persistence is possible.

Global events are transient: once used, they don't maintain state. While receivers can process the incoming data, any storage will remain **local state**, not shareable across components.

Global state, on the other hand, maintains a shared state across the application, making it ideal for data that **needs to be stored** and accessed by multiple components.
