/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-05-21 15:54:58
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-06 10:04:52
 * @FilePath: \xiaohu_demo_vue\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

//懒加载
const [Home, ThreeJs] = [
  () => import('@/views/Home.vue'),
  () => import('@/views/ThreeJs.vue'),
];

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
  history: createWebHistory('/'),
  routes,
});

export default router;
