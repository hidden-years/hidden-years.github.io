import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/", icon: "material-symbols:house" },
  { text: "动态", link: "/blog/", icon: "material-symbols:article" },
  {
    text: "教程",
    link: "/docs/tutorials/",
    icon: "material-symbols:book-4-spark",
  },
  {
    text: "Wiki",
    link: "/docs/wiki/",
    icon: "material-symbols:book",
  },
  {
    text: "关于",
    icon: "material-symbols:more",
    items: [
      "/docs/about/",
      "/docs/about/contribute",
      "/docs/about/republish",
      "/docs/about/license",
    ]
  },
]);
