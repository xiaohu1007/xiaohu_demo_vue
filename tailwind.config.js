/*
 * @Description:
 * @Author: wuhaohu
 * @Date: 2024-05-17 10:50:01
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-05-22 10:25:11
 * @FilePath: \xiaohu_demo_vue\tailwind.config.js
 */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        title: '#202020',
        secondTitle: '#8A8A8A',
        normal: '#4b4b4b',
        light: '#dddddd',
        active: '#2C54D1',
        disabled: '#aaaaaa',
      },
      fontSize: {
        20: '20px',
        18: '18px',
        16: '16px',
        14: '14px',
      },
    },
  },
  plugins: [],
};
