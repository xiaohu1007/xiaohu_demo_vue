/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-05-17 14:06:31
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-07 16:43:25
 * @FilePath: \xiaohu_demo_vue\vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

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
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
          // 自动导入图标组件
          IconsResolver({
            // 自动引入的Icon组件统一前缀，默认为icon，设置false为不需要前缀
            prefix: 'icon',
            // 当图标集名字过长时，可使用集合别名
            alias: {
              system: 'system-uicons',
            },
          }),
        ],
        dts: path.resolve(__dirname, 'types/auto-imports.d.ts'),
      }),
      // 自动导入组件插件，支持按需导入 Element Plus 组件
      Components({
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'], // @iconify-json/ep 是 Element Plus 的图标库
          }),
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
        dts: path.resolve(__dirname, 'types/components.d.ts'),
      }),
      // 分析打包后的文件
      visualizer({ open: true }),
      // 自定义svg组件
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
        svgoOptions: {
          // 删除一些填充的属性
          plugins: [
            {
              name: 'removeAttrs',
              params: { attrs: ['class', 'data-name', 'fill', 'stroke'] },
            },
            // 删除样式标签
            'removeStyleElement',
          ],
        },
      }),
      // 优雅使用icons
      Icons({
        compiler: 'vue3', // 指定编译器
        autoInstall: true, // 自动安装
      }),
    ],
    define: {
      'process.env': {}, // 定义全局变量，防止因使用 process.env 导致的报错
    },
    root: process.cwd(), // 项目根目录
    assetsInclude: '**/*.xlsx', // 允许打包 xlsx 文件
    envDir: path.resolve(__dirname, './env'),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // 配置路径别名
        '@assets': path.resolve(__dirname, './src/assets'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@api': path.resolve(__dirname, './src/apis/modules'),
        '@store': path.resolve(__dirname, './src/store/modules'),
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

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/styles/variables.scss' as *;`, // 引入全局变量文件
        },
      },
    },
    build: {
      outDir: fileName, // 指定打包输出目录
      assetsPublicPath: env.VITE_PUBLIC_PATH, // 设置资源公共路径
      cssCodeSplit: true, //css 拆分
      sourcemap: false, //不生成sourcemap
      minify: 'terser', //是否禁用最小化混淆，esbuild打包速度最快，terser打包体积最小
      chunkSizeWarningLimit: 2000,
      assetsInlineLimit: 5000, //小于该值 图片将打包成Base64
    },
  };
});
