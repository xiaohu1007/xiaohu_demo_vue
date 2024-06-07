/*
 * @Description: 自定义语言包
 * @Author: wuhaohu
 * @Date: 2024-06-07 10:56:21
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-07 14:59:18
 * @FilePath: \xiaohu_demo_vue\src\locales\index.ts
 */
import { createI18n } from 'vue-i18n';
import en from './packages/en';
import zhCn from './packages/zh-cn';
import jp from './packages/jp';
import cacheUtils from '@utils/cacheUtils';
import { useAppStore } from '@store/appStore';

// 读取本地浏览器语言环境 中文 zh-CN  英文 eng
const language = navigator.language
  ? navigator.language
  : (navigator as any).userLangiage || 'zhCn';

// 初始化i18n
const i18n = createI18n({
  legacy: false, // 解决Not available in legacy mode报错
  globalInjection: true, // 全局模式，可以直接使用 $t
  locale: cacheUtils.get('lang') || 'zhCn', // 从本地缓存中取语言，如果没有 默认为中文
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en,
    zhCn,
    jp,
  },
});

export default i18n;

// 初始化语言
export function initLang() {
  const appStore = useAppStore();
  i18n.global.locale.value =
    cacheUtils.get('lang') || language.replace('-', '');
  appStore.lang = cacheUtils.get('lang');
}
