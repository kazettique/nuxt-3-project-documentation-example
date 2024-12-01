import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withMermaid({
    title: "My Nuxt Project",
    description: "Frontend Development Guide",
    themeConfig: {
      nav: [{ text: "Quickstart", link: "/" }],
      sidebar: {
        "/": [
          {
            text: "",
            items: [
              { text: "Quickstart", link: "/" },
              {
                text: "Project Structure",
                items: [
                  { text: "Folder Structure", link: "/folder-structure" },
                  { text: "Code Structure", link: "/code-structure" },
                ],
              },
              {
                text: "Coding Style",
                items: [
                  { text: "UI Component", link: "/ui-component" },
                  { text: "CSS Convention", link: "/css-convention" },
                  { text: "Icon Font", link: "/icon-font" },
                  { text: "TypeScript Convention", link: "/typescript-convention" },
                  { text: "Data Model", link: "/data-model" },
                  { text: "Data Validator", link: "/data-validator" },
                  { text: "Data Transformer", link: "/data-transformer" },
                  { text: "Global State", link: "/global-state" },
                  { text: "Global Event", link: "/global-event" },
                  { text: "Transaction Machine", link: "/transaction-machine" },
                  { text: "Repository", link: "/repository" },
                ],
              },
              { text: "Configurations", link: "/configurations" },
              { text: "Troubleshooting", link: "/troubleshooting" },
            ],
          },
        ],
      },
      search: {
        provider: "local",
      },
      copyRight: "Copyright © 2024",
    },
    base: "/",
    lastUpdated: true,
    ignoreDeadLinks: true,
  })
);
