/*
 * @Description: 网关code判断
 * @Author: wuhaohu
 * @Date: 2024-06-04 12:58:28
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-04 13:03:05
 * @FilePath: \xiaohu_demo_vue\src\apis\helper\checkStatus.ts
 */
import { uniqueMessage } from '@/utils/uniqueMessage';

export const checkStatus = (status: number) => {
  switch (status) {
    case 400:
      uniqueMessage.error('请求失败！请您稍后重试');
      break;
    case 401:
      uniqueMessage.error('登录失效！请您重新登录');
      break;
    case 403:
      uniqueMessage.error('当前账号无权限访问！');
      break;
    case 404:
      uniqueMessage.error('你所访问的资源不存在！');
      break;
    case 405:
      uniqueMessage.error('请求方式错误！请您稍后重试');
      break;
    case 408:
      uniqueMessage.error('请求超时！请您稍后重试');
      break;
    case 500:
      uniqueMessage.error('服务异常！');
      break;
    case 502:
      uniqueMessage.error('网关错误！');
      break;
    case 503:
      uniqueMessage.error('服务不可用！');
      break;
    case 504:
      uniqueMessage.error('网关超时！');
      break;
    default:
      uniqueMessage.error('连接服务器失败，请稍后再试');
  }
};
