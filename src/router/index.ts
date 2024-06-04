/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-05-21 15:54:58
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-05-21 16:01:49
 * @FilePath: \xiaohu_demo_vue\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/threejs',
  //   name: 'ThreeJs',
  //   component: ThreeJs,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
