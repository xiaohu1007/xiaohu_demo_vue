import en from './en';
import cn from './cn';

const messages = {
  en,
  cn,
};

const language = (
  // 读取本地浏览器语言环境 中文 zh-CN  英文 eng
  (navigator.language ? navigator.language : (navigator as any).userLangiage) || 'zh'
).toLowerCase();

export default {
  fallbackLocale: 'zh',
  legacy: false,
  globalInjection: true, // 全局生效$t
  locale: language.split('-')[0] || 'zh', // 默认中文
  messages,
}
