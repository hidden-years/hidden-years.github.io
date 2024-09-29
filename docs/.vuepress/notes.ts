import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

const tutorialsNote = defineNoteConfig({
  dir: "tutorials",
  link: "/docs/tutorials",
  sidebar: [
    {
      text: "开始",
      items: ["", "what-is-hy2", "start", "manual-import"],
    },
  ],
});

const aboutNote = defineNoteConfig({
  dir: "about",
  link: "/docs/about",
  sidebar: [
    {
      text: "关于",
      items: ["","contribute", "future", "license"],
    },
  ],
});

export const notes = defineNotesConfig({
  dir: "docs",
  link: "/",
  notes: [tutorialsNote, aboutNote],
});
