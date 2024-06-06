/*
 * @Description: 首页入口
 * @Author: wuhaohu
 * @Date: 2024-05-17 10:13:14
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-05 17:37:27
 * @FilePath: \xiaohu_demo_vue\src\main.ts
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupStore } from './store';
import router from './router';
import dayjs from 'dayjs';
import i18nOptionsObj from '@/lang/index'; // 配置翻译对象
import { createI18n } from 'vue-i18n'; // 创建实例的狗子

import '@/assets/main.scss';
import '@/assets/reset.css';

const app = createApp(App);

// 翻译
const i18n = createI18n(i18nOptionsObj);

setupStore(app);

app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$t = i18n.global.t;

app.use(router).use(i18n).mount('#app');
