import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";

export default defineUserConfig({
  lang: "zh-CN",
  title: "隐藏之年",
  description: "探索未知的世间",
  head: [
    [
      "link",
      { rel: "icon", href: `https://s21.ax1x.com/2024/07/11/pkhrmIf.png` },
    ],
  ],

  theme: plumeTheme({
    footer: {
      copyright: "Copyright © 2023-present 隐藏之年开发组",
      message: "「探索未知的世间」",
    },
    plugins: {
      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-power/
       */
       markdownPower: {
         plot: true,
         bilibili: true,
         icons: true,
       },
    },
  }),

  bundler: viteBundler(),
});
