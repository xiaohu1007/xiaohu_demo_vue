/*
 * @Description: 工具类方法
 * @Author: wuhaohu
 * @Date: 2024-06-04 11:31:18
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-05 17:43:44
 * @FilePath: \xiaohu_demo_vue\src\utils\index.ts
 */
import _ from 'lodash';
// 生成Guid
export const setGuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * 判断数据类型
 * @param {any} obj
 * @returns {string}
 */
export const getDataType = (obj: any): string => {
  const type = typeof obj;
  if (type !== 'object') {
    return type;
  }
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (\S+)\]$/, '$1');
};

/**
 * 生成给定区间的随机数
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// 是否是开发环境
export function isDev() {
  return import.meta.env.NODE_ENV === 'development';
}

// 是否是生产环境
export function isProd() {
  return import.meta.env.NODE_ENV === 'production';
}
