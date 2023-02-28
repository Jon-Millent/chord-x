import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "home/index" },
    {
      path: "/tools",
      routes: [
        { path: "/tools/interval", component: "tools/interval" },
      ]
    },
  ],
  npmClient: 'pnpm',
  history: {
    type: 'hash',
  },
  manifest: {
    basePath: '/',
  },
  hash: true,
});
