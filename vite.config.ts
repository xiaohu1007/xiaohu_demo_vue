/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-05-17 14:06:31
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-05 17:41:54
 * @FilePath: \xiaohu_demo_vue\vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 加载当前环境变量
  const env = loadEnv(mode, process.cwd());

  // 定义打包输出文件夹名称
  let fileName = 'dist';

  // 根据环境变量设置打包文件名，防止打包崩溃
  fileName = env.VITE_APP_NAME;

  return {
    // 设置基础路径，根据环境变量区分生产环境和开发环境
    base: env.VITE_PUBLIC_PATH,
    plugins: [
      // Vue 插件，支持 .vue 文件
      vue(),
      // 支持在 setup 中使用自定义组件名
      vueSetupExtend(),
      // 自动导入插件，自动导入 Vue 和 Vue Router 的 API
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: 'auto-imports.d.ts', // 根据引入来源自动生成的类型声明文件路径
        resolvers: [ElementPlusResolver()],
      }),
      // 自动导入组件插件，支持按需导入 Element Plus 组件
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    define: {
      'process.env': {}, // 定义全局变量，防止因使用 process.env 导致的报错
    },
    root: process.cwd(), // 项目根目录
    assetsInclude: '**/*.xlsx', // 允许打包 xlsx 文件

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // 配置路径别名
      },
    },
    server: {
      host: '0.0.0.0', // 指定服务器监听的 IP 地址
      port: 8888, // 指定开发服务器端口
      open: true, // 是否自动打开浏览器
      proxy: {
        [env.VITE_API_PREFIX as string]: {
          target: env.VITE_URL, // 指定要代理的目标地址
          changeOrigin: true, // 是否改变请求的来源
          rewrite: (path) =>
            path.replace(new RegExp(`/^${env.VITE_API_PREFIX}/`), ''), // 可选的路径重写规则
        },
      },
    },
    build: {
      outDir: fileName, // 指定打包输出目录
      assetsPublicPath: env.VITE_PUBLIC_PATH, // 设置资源公共路径
    },
  };
});
