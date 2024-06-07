/*
 * @Description: 应用状态管理
 * @Author: wuhaohu
 * @Date: 2024-06-07 12:58:58
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-07 13:01:08
 * @FilePath: \xiaohu_demo_vue\src\store\modules\appStore.ts
 */
import { defineStore } from 'pinia';
import cacheUtils from '@/utils/cacheUtils';
import { themeModeEnum, keyThemePrefix } from '@/utils/themeUtils';

// 应用相关状态管理
export const useAppStore = defineStore('appStore', {
  state() {
    return {
      lang: cacheUtils.get('lang') || 'zhCn', // app的语言
      theme: cacheUtils.get(keyThemePrefix + 'mode') || themeModeEnum.light, // app的主题
    };
  },
});