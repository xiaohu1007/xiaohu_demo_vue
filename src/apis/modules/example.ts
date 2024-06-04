/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-06-04 13:25:31
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-04 13:29:07
 * @FilePath: \xiaohu_demo_vue\src\apis\modules\example.ts
 */
import qs from 'qs';
import request from '../index';
// 例子

// 普通post请求,参数在requestbody上
export const postTest1Api = (data: any) => {
  return request.post(`xxxx/xxxx`, data);
};

// post请求，但是参数拼在链接上
export const postTest2Api = (data: any) => {
  return request.post(`xxxx/xxxx`, qs.stringify(data));
};

// 不建议“既要又要”
export const postTest3Api = ({ params, data }: any) => {
  return request.post(`xxxx/xxxx?id=${params.id}`, data);
};
