import type {EnhanceAppContext} from 'vitepress'
import DefaultTheme from "vitepress/theme"
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'

export default {
  ...DefaultTheme,
  enhanceApp: (ctx: EnhanceAppContext) => {
    vitepressNprogress(ctx)
  }
}
