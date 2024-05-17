/*
 * @Description: 
 * @Author: wuhaohu
 * @Date: 2024-05-17 10:21:44
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-05-17 11:35:02
 * @FilePath: \xiaohu_demo_vue\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',  // 添加这一行
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ]
  },
};