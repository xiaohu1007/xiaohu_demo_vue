/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-05-17 10:13:14
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-05-21 16:00:41
 * @FilePath: \xiaohu_demo_vue\src\main.ts
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupStore } from './store';
import router from './router';
import '@/assets/main.scss';

const app = createApp(App);

setupStore(app);

app.use(router).mount('#app');
