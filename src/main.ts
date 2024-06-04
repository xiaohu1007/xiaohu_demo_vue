/*
 * @Description: 首页入口
 * @Author: wuhaohu
 * @Date: 2024-05-17 10:13:14
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-05-22 10:49:49
 * @FilePath: \xiaohu_demo_vue\src\main.ts
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupStore } from './store';
import router from './router';
import dayjs from 'dayjs';
import '@/assets/main.scss';
import '@/assets/reset.css';

const app = createApp(App);

setupStore(app);

app.config.globalProperties.$dayjs = dayjs;

app.use(router).mount('#app');
