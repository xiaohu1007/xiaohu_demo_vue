/*
 * @Description: 首页入口
 * @Author: wuhaohu
 * @Date: 2024-05-17 10:13:14
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-07 17:13:04
 * @FilePath: \xiaohu_demo_vue\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import pinia from './store';
import router from './router';
import dayjs from 'dayjs';
import i18n from './locales';
import { initLang } from '@/locales';
import { initTheme } from '@/utils/themeUtils';
import 'virtual:svg-icons-register';
import '@/styles/reset.css';
import './style.scss';
import '@/styles/gloabl.scss';

const app = createApp(App);

// 新增全局变量 dayjs
app.config.globalProperties.$dayjs = dayjs;

// 配置路由
app.use(router);
// 配置pinia
app.use(pinia);
// 配置国际化语言
app.use(i18n);

app.mount('#app').$nextTick(() => {
  // 初始化多语言切换
  initLang();
  // 初始化主题色
  initTheme();
});
