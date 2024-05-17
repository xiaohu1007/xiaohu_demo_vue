/*
 * @Description: 
 * @Author: wuhaohu
 * @Date: 2024-05-17 10:16:46
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-05-17 11:35:51
 * @FilePath: \xiaohu_demo_vue\src\store\index.ts
 */

import { createPinia } from 'pinia';
import { App } from 'vue';

export function setupStore(app: App) {
  const pinia = createPinia();
  app.use(pinia);
}