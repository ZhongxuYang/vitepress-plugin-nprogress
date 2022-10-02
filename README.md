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

import vitepressNprogress from 'vitepress-plugin-nprogress'

export default {
  enhanceApp: (ctx) => {
    vitepressNprogress(ctx)
  }
}
```

Then you can use `nprogress` ! 🎉