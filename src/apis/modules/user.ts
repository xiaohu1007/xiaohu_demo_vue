/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-06-04 13:14:01
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-04 13:30:54
 * @FilePath: \xiaohu_demo_vue\src\apis\modules\user.ts
 */
import qs from 'qs';
import request from '../index';

export const getUserInfoApi = (params: any) => {
  return request.get('/xxx/xxx', qs.stringify(params));
};
