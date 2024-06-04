# 此项目使用vue3 + ts + vite + pina + element-Plus + tailwind css + sass 搭建

## 项目运行

```
// 安装依赖
yarn or npm install
// 运行项目
yarn dev or npm run dev
// 打包项目
yarn build or npm run build
```

## 搭建问题解决

- 1.vite.config.ts 文件种 \_\_dirname 报错 请安装@types/node
- 2.编译器引入模块时 红色提示 解决方法(https://blog.csdn.net/qq_63652597/article/details/135320176)
- 3.tailwind-css报错问题 解决方法(https://duncanleung.com/tailwind-css-unknown-at-rule/)

## 项目目录结构

/ xiaohu_demo_vue
|-- .eslintrc.js
|-- .gitignore
|-- .prettierrc
|-- auto-imports.d.ts
|-- components.d.ts
|-- Dockerfile
|-- index.html
|-- package.json
|-- postcss.config.js
|-- README.md
|-- tailwind.config.js
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- yarn.lock
|-- .github
| |-- workflows
| |-- cicd.yml
|-- .vscode
| |-- extensions.json
| |-- settings.json
| |-- tailwindcss.json
|-- dist
| |-- index.html
| |-- vite.svg
| |-- assets
| |-- index-BHxknYzU.css
| |-- index-Dh5qFqNp.js
|-- public
| |-- vite.svg
|-- src
|-- App.vue
|-- main.ts
|-- style.css
|-- vite-env.d.ts
|-- assets
| |-- main.scss
|-- components
| |-- HelloWorld.vue
|-- plugins
| |-- element-plus.ts
|-- router
| |-- index.ts
|-- store
| |-- index.ts
|-- views
|-- Home.vue
|-- ThreeJs.vue
