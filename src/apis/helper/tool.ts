/*
 * @Description: 工具方法
 * @Author: wuhaohu
 * @Date: 2024-06-04 12:58:28
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-04 13:02:20
 * @FilePath: \xiaohu_demo_vue\src\apis\helper\tool.ts
 */

import { AxiosPromise } from 'axios';

// axios包装
export const axiosWrap = (promise: AxiosPromise) => {
  return promise
    .then((res) => {
      return { res };
    })
    .catch((err) => {
      return { err };
    });
};
