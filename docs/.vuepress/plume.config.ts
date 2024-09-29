import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://s21.ax1x.com/2024/07/11/pkhrmIf.png',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

  profile: {
    avatar: 'https://s21.ax1x.com/2024/07/12/pk4ihOf.png',
    name: '隐藏之年开发组',
    description: '鸽子们的聚集地',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: '/' },
  ],

})
