/*
 * @Description: 避免 $message 报错多次弹出
 * @Author: wuhaohu
 * @Date: 2024-06-04 10:50:48
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-04 11:32:36
 * @FilePath: \xiaohu_demo_vue\src\utils\uniqueMessage.ts
 */
import { ElMessage, MessageParamsWithType } from 'element-plus';

const showMessage = Symbol('showMessage');

export const uniqueMessage = {
  success(options: MessageParamsWithType, single = true) {
    this[showMessage]('success', options, single);
  },

  warning(options: MessageParamsWithType, single = true) {
    this[showMessage]('warning', options, single);
  },

  info(options: MessageParamsWithType, single = true) {
    this[showMessage]('info', options, single);
  },

  error(options: MessageParamsWithType, single = true) {
    this[showMessage]('error', options, single);
  },

  [showMessage](
    type: 'success' | 'warning' | 'error' | 'info' = 'info',
    options: MessageParamsWithType,
    single: any,
  ) {
    if (single) {
      // 判断是否已存在Message
      if (!document.getElementsByClassName('el-message').length) {
        ElMessage[type](options);
      }
    } else {
      ElMessage[type](options);
    }
  },
};
