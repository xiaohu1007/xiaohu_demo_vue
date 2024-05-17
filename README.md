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
1.vite.config.ts 文件种 __dirname 报错 请安装@types/node
2.编译器引入模块时 红色提示 解决方法(https://blog.csdn.net/qq_63652597/article/details/135320176)
3.tailwind-css报错问题 解决方法(https://duncanleung.com/tailwind-css-unknown-at-rule/)


## 项目目录结构
xiaohu_demo_vue/
├── public/
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   └── HelloWorld.vue
│   ├── plugins/
│   │   └── element-plus.ts
│   ├── store/
│   │   ├── modules/
│   │   │   └── counter.ts
│   │   └── index.ts
│   ├── App.vue
│   ├── main.ts
│   ├── style.css
│   └── vite-env.d.ts
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── node_modules/