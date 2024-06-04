/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-06-04 13:15:49
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-04 13:24:45
 * @FilePath: \xiaohu_demo_vue\src\apis\config\https.ts
 */
/*
 * @Description: axios 全局配置
 * @Author: wuhaohu
 * @Date: 2024-06-04 10:48:46
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-04 13:08:03
 * @FilePath: \xiaohu_demo_vue\src\apis\index.ts
 */
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { uniqueMessage } from '@/utils/uniqueMessage';
import { AxiosCanceler } from '../helper/axiosCancel';
import { responseCodeEnums } from '../config/enum';
import { checkStatus } from '../helper/checkStatus';
import { axiosWrap } from '../helper/tool';

const axiosCanceler = new AxiosCanceler();

// axios基础配置 也可在此基础上扩展
export class HttpRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        // 将当前请求加入队列
        axiosCanceler.addPending(config);

        // 设置请求所带的token/session/'Content-Type'等
        config.headers['Authorization'] = sessionStorage.getItem('token') ?? '';
        return config;
      },
      (err) => {
        uniqueMessage.error('连接服务器失败，请稍后再试');
        return Promise.reject(err);
      },
    );

    // 响应拦截
    this.instance.interceptors.response.use(
      (response) => {
        // 请求结束后将当前请求移除队列
        axiosCanceler.removePending(config);
        const res = response.data;
        // 根据实际情况配置
        const resCode = res.code;
        const resMessage = res.message;
        // 不进行处理的接口（例如登出接口）
        const whiteApiList: string[] = [];
        if (whiteApiList.includes(response.config.url as string)) {
          return res;
        }
        // 文件类型不处理
        if (response.config.responseType === 'blob') {
          return response;
        }
        // 正常处理
        if (Object.hasOwn(res, 'code')) {
          if (responseCodeEnums.success.includes(resCode)) {
            // 正常情况
            return res;
          } else if (responseCodeEnums.overdue.includes(resCode)) {
            // 登录超时或未登录
            uniqueMessage.error(resMessage || '请重新登录');
            // router.push('/login');
            return res;
          } else {
            // 其它报错
            uniqueMessage.error(resMessage || '好像出错了');
            // return res;
            return Promise.reject(res);
          }
        } else {
          // 不规范的接口以及其它外部接口直接正常处理
          return res;
        }
      },
      (err) => {
        // 请求超时/网络错误单独判断，因为没有 response
        if (err.message.includes('timeout')) {
          uniqueMessage.error('请求超时！请您稍后重试');
        }
        if (err.message.includes('Network Error')) {
          uniqueMessage.error('网络错误！请您稍后重试');
        }
        // 取消请求正常返回
        if (err && err instanceof err.constructor && err.__CANCEL__) {
          return Promise.resolve(err);
        }
        // 判断网关报错
        const { response } = err;
        if (response) {
          checkStatus(response?.status ?? '');
        }
        return Promise.reject(err);
      },
    );
  }
  // axios 方法封装
  get(url: string, params: any, _object = {}) {
    // get方法通常无需修改Content-Type,如果一定要改,请在请求拦截中为get方法设置config.data = true;但是axios不支持get方法在body内传参,所以这种情况通知后台将接口改为post比较好
    // https://blog.csdn.net/qq_24729895/article/details/80367460
    return axiosWrap(this.instance.get(url, { params, ..._object }));
  }

  post(url: string, params: any, _object = {}) {
    return axiosWrap(this.instance.post(url, params, _object));
  }

  put(url: string, params: any, _object = {}) {
    return axiosWrap(this.instance.put(url, params, _object));
  }

  delete(url: string, params: any, _object = {}) {
    return axiosWrap(this.instance.delete(url, { params, ..._object }));
  }

  // 文件上传
  postUploadFile(
    url: string,
    data: any,
    _object: { headers: { 'Content-Type': string } },
  ) {
    const obj = _object || {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    return axiosWrap(this.instance.post(url, data, obj));
  }

  // 文件下载
  postDownloadFile(
    url: string,
    data: any,
    _object: { headers: { 'Content-Type': string }; responseType: any },
  ) {
    const obj = _object || {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      responseType: 'blob',
    };
    return axiosWrap(this.instance.post(url, data, obj));
  }
}
