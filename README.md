# vitepress-plugin-nprogress

> Nprogress plugin for Vitepress

<!-- <p align="center">
  <a href="https://github.com/ZhongxuYang/vitepress-plugin-nprogress" target="_blank" rel="noopener noreferrer">
    <img width="180" src="./public/ic_analytics.svg" alt="vitepress-plugin-nprogress logo">
  </a>
</p> -->
<p align="center">
  <img src="https://img.shields.io/npm/dm/vitepress-plugin-nprogress.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vitepress-plugin-nprogress"><img src="https://img.shields.io/npm/v/vitepress-plugin-nprogress.svg" alt="Version"></a>
  <a href="https://github.com/vuejs/vitepress-plugin-nprogress/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/vitepress-plugin-nprogress.svg" alt="License"></a>
</p>

## Install
```sh
yarn add -D vitepress-plugin-nprogress
# OR npm install -D vitepress-plugin-nprogress
```

## Usage
```ts
// .vitepress/theme/index.ts

import DefaultTheme from "vitepress/theme"

import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    vitepressNprogress(ctx)
  }
}
```

## Tips
If got `TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".css" for ***/node_modules/nprogress/nprogress.css` error when you build, 

you can config like this in your `vite.config.ts`:
```ts
// vite.config.ts
import {defineConfig} from 'vite'

export default defineConfig({
  ssr: {
    noExternal: ['vitepress-plugin-nprogress']
  },
})
```

Then you can use `nprogress` ! 🎉