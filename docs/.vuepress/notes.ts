import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

const hy2Tutorials = defineNoteConfig({
  dir: "tutorials",
  link: "/docs/tutorials",
  sidebar: [
    "",
    {
      text: "从这里开始",
      items: [
        "what-is-hy2",
        "start",
        "materials",
        "tools-and-weapons",
        "plugins",
      ],
      collapsed: false,
      icon: "material-symbols:browse-gallery",
    },
    {
      text: "高级教程",
      items: ["manual-import", "get-content-log"],
      collapsed: false,
      icon: "material-symbols:border-all-rounded",
    },
  ],
});

const hy2Wiki = defineNoteConfig({
  dir: "wiki",
  link: "/docs/wiki",
  sidebar: [
    "",
    {
      text: "材料",
      items: [
        "material/",
        "material/wooden",
        "material/golden",
        "material/stone",
        "material/copper",
        "material/bone",
        "material/amethyst",
        "material/over_metal",
        "material/flash_metal",
        "material/iron",
        "material/corrosion",
        "material/flash_copper",
        "material/diamond",
        "material/steel",
        "material/netherite",
        "material/smaragdus",
      ],
      collapsed: true,
      icon: "material-symbols:breakfast-dining",
    },
    {
      text: "工具与武器",
      items: [
        "tool/",
        "tool/skill",
        "tool/magic-attack",
        "tool/hammer",
        "tool/crowbar",
        "tool/awl",
        "tool/knife",
        "tool/dagger",
        "tool/boardsword",
      ],
      collapsed: true,
      icon: "material-symbols:tools-power-drill",
    },
    {
      text: "BOSS",
      items: ["boss/", "boss/king-of-ruby", "boss/pharaohs-ghost"],
      collapsed: true,
      icon: "game-icons:axolotl",
    },
    {
      text: "游戏机制",
      items: [
        "gameplay/",
        "gameplay/imitation-damage",
        "gameplay/article",
        "gameplay/blood-armor",
      ],
      collapsed: true,
      icon: "material-symbols:videogame-asset",
    },
    {
      text: "物品",
      items: [
        "item/medicine",
        "item/fuel-metal",
        "item/mineral-fuel",
      ],
      collapsed: true,
      icon: "lucide:pickaxe",
    },
    {
      text: "隐藏乐事",
      items: [
        "hiddendelight/",
        "hiddendelight/chocolate",
        "hiddendelight/copper-food",
        "hiddendelight/honey-candy",
        "hiddendelight/marshallow",
        "hiddendelight/syrup"
      ],
      collapsed: true,
      icon: "uil:food",
    },
    {
      text: "开发文档",
      items: [
        "dev/",
        "dev/upgrade",
        "dev/tags"
      ],
      collapsed: true,
      icon: "material-symbols:handyman",
    },
  ],
});

const hy2About = defineNoteConfig({
  dir: "about",
  link: "/docs/about",
  sidebar: [
    {
      text: "关于",
      items: ["", "contribute", "republish", "license"],
      collapsed: false,
    },
  ],
});

export const notes = defineNotesConfig({
  dir: "docs",
  link: "/",
  notes: [hy2Wiki, hy2About, hy2Tutorials],
});
