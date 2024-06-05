/*
 * @Description: 公共接口请求
 * @Author: wuhaohu
 * @Date: 2024-06-04 13:09:19
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-04 13:25:16
 * @FilePath: \xiaohu_demo_vue\src\apis\index.ts
 */

import { HttpRequest } from './config/https';

const request = new HttpRequest({
  baseURL: process.env.VITE_API_PREFIX,
});

export default request;
