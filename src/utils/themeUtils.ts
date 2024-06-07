/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-06-07 11:16:33
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-07 15:45:19
 * @FilePath: \xiaohu_demo_vue\src\utils\themeUtils.ts
 */
import cacheUtils from '@/utils/cacheUtils';
import { useAppStore } from '@/store/modules/appStore';

/**主题前缀 */
export const keyThemePrefix = 'theme_';

/**主题模式 枚举 */
export const enum themeModeEnum {
  dark = 'dark',
  light = 'light',
}

/**主题map，方便在主题切换组件中取值 */
export const themeModeMap = new Map<string, string>([
  [themeModeEnum.dark, '暗色主题'],
  [themeModeEnum.light, '亮色主题'],
]);

/**
 * 从缓存或默认json样式配置中全局设置样式变量
 */
export const initTheme = () => {
  // 从缓存中取出当前主题模式，默认为 light模式
  themeChange(cacheUtils.get(keyThemePrefix + 'mode') || themeModeEnum.light);
};

/**
 * 切换主题模式
 * @param mode 主题模式
 */
export function themeChange(mode: string) {
  // app状态管理
  const appStore = useAppStore();
  // 设置主题状态
  appStore.theme = mode;
  // 设置缓存为对应主题
  cacheUtils.set(keyThemePrefix + 'mode', mode);

  // 修改主题色
  switch (mode) {
    case themeModeEnum.dark:
      document.body.setAttribute('data-theme', mode);
      break;
    // 补充任意个自定义主题色.......
    default:
      document.body.setAttribute('data-theme', mode);
      break;
  }
}

export default {
  themeChange,
  initTheme,
  keyThemePrefix,
};
