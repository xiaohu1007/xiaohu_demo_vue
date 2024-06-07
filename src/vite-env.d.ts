/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-05-17 10:13:14
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-07 12:46:41
 * @FilePath: \xiaohu_demo_vue\src\vite-env.d.ts
 */
/// <reference types="vite/client" />
/// <reference types="node" />
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

/**
 * 配置环境变量的声明，方便使用vite的环境变量时得到代码提示
 * 对应.env或.env.x文件中定义的属性名，注意vite要求自定义属性的前缀必须为VITE_xxxx
 */
interface ImportMetaEnv {
  readonly VITE_PUBLIC_PATH: string; // 打包后的路径
  readonly VITE_URL: string; // 接口地址
  readonly VITE_API_PREFIX: string; // 接口浅醉
}
