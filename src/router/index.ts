/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-05-21 15:54:58
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-07 14:23:36
 * @FilePath: \xiaohu_demo_vue\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

//懒加载
const [
  Home,
  Threejs,
  BaseSence,
  Transform,
  Animations,
  Cameras,
  FullScreenAndResizing,
  Gemometries,
  DebugUI,
  Textures,
  Materials,
] = [
  () => import('@/views/home/index.vue'),
  () => import('@/views/threejs/index.vue'),
  () => import('@/views/threejs/01-BaseSence.vue'),
  () => import('@/views/threejs/02-Transform.vue'),
  () => import('@/views/threejs/03-Animations.vue'),
  () => import('@/views/threejs/04-Cameras.vue'),
  () => import('@/views/threejs/05-FullScreenAndResizing.vue'),
  () => import('@/views/threejs/06-Gemometries.vue'),
  () => import('@/views/threejs/07-DebugUI.vue'),
  () => import('@/views/threejs/08-Textures.vue'),
  () => import('@/views/threejs/09-Materials.vue'),
];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/threejs',
    name: 'Threejs',
    component: Threejs,
    children: [
      {
        path: '/baseSence',
        name: 'BaseSence',
        component: BaseSence,
      },
      {
        path: '/transform',
        name: 'Transform',
        component: Transform,
      },
      {
        path: '/animations',
        name: 'Animations',
        component: Animations,
      },
      {
        path: '/cameras',
        name: 'Cameras',
        component: Cameras,
      },
      {
        path: '/fullScreenAndResizing',
        name: 'FullScreenAndResizing',
        component: FullScreenAndResizing,
      },
      {
        path: '/gemometries',
        name: 'Gemometries',
        component: Gemometries,
      },
      {
        path: '/debugUI',
        name: 'DebugUI',
        component: DebugUI,
      },
      {
        path: '/textures',
        name: 'Textures',
        component: Textures,
      },
      {
        path: '/materials',
        name: 'Materials',
        component: Materials,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes,
});

export default router;
