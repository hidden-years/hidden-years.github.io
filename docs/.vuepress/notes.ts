import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

const tutorialsNote = defineNoteConfig({
  dir: "tutorials",
  link: "/docs/tutorials",
  sidebar: [
    "",
    {
      text: "开始",
      items: ["what-is-hy2", "start", "manual-import"],
      collapsed: false,
      icon: "material-symbols:browse-gallery",
    },
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
      items: [
        "boss/",
        "boss/king-of-ruby",
        "boss/pharaohs-ghost",
      ],
      collapsed: true,
      icon: "game-icons:axolotl",
    },
    {
      text: "游戏内容",
      items: ["gameplay/", "gameplay/imitation-damage", "gameplay/article", "gameplay/blood-armor"],
      collapsed: true,
      icon: "material-symbols:videogame-asset",
    },
    {
      text: "物品",
      items: [
        "item/chocolate",
        "item/copper-food",
        "item/honey-candy",
        "item/marshallow",
        "item/medicine",
        "item/syrup",
        "item/fuel-metal",
        "item/mineral-fuel",
      ],
      collapsed: true,
      icon: "lucide:pickaxe",
    },
  ],
});

const aboutNote = defineNoteConfig({
  dir: "about",
  link: "/docs/about",
  sidebar: [
    {
      text: "关于",
      items: ["", "contribute", "future", "license"],
      collapsed: false,
    },
  ],
});

const verNote = defineNoteConfig({
  dir: "version",
  link: "/version",
  sidebar: [
    {
      text: "关于",
      items: ["desert"],
      collapsed: false,
    },
  ],
});

export const notes = defineNotesConfig({
  dir: "docs",
  link: "/",
  notes: [tutorialsNote, aboutNote],
});
