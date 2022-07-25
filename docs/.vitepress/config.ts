import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vue Incremental List",
  description: "Automatic list wrapper",
  base: "/vue-incremental-list/",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/" },
      { text: "API", link: "/api" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Installation", link: "/" }],
      },
      {
        text: "Usage",
        items: [{ text: "TypeScript", link: "/guide/typescript" }],
      },
    ],
  },
});
