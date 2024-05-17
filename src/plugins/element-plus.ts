/*
 * @Description: 
 * @Author: wuhaohu
 * @Date: 2024-05-17 10:17:26
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-05-17 10:17:30
 * @FilePath: \xiaohu_demo_vue\src\plugins\element-plus.ts
 */
import { App } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export function setupElementPlus(app: App) {
  app.use(ElementPlus);
}