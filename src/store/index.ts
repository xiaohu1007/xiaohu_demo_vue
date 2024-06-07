/*
 * @Description: pinia 基本配置
 * @Author: wuhaohu
 * @Date: 2024-05-17 10:16:46
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-07 13:00:48
 * @FilePath: \xiaohu_demo_vue\src\store\index.ts
 */

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
// 持久化
pinia.use(piniaPluginPersistedstate);

export default pinia;
