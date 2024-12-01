---
outline: deep
---

# CSS Styling

## Tailwind Custom Styles

Tailwind custom styles are defined in `tailwind.config.js`, and the class names must include the prefix to distinguish them from Tailwind classes

:::info
While Tailwind classes are used less frequently, they still serve a purpose, so we keep them rather than completely override them.
:::

## main.scss Conversion

`main.scss` is primarily used for **content styling**, since content styles come from HTML strings in API responses and therefore cannot use Tailwind classes. Additionally, it is used by the Admin Backend text editor. This file is located at: `src/assets/css/main.scss`

If `main.scss` was updated, please run the script below:

```bash
npm run build-css
```

Converted file will be placed in `src/public/css/main.css`.
