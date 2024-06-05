/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-05-21 15:54:58
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-05-21 16:01:49
 * @FilePath: \xiaohu_demo_vue\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import ThreeJs from '@/views/ThreeJs.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/threejs',
    name: 'ThreeJs',
    component: ThreeJs,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  // createWebHistory(import.meta.env.VITE_PUBLIC_PATH,),

  routes,
});

export default router;
