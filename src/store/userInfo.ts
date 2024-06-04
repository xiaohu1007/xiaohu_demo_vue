/*
 * @Description: userInfo 人员信息模块
 * @Author: wuhaohu
 * @Date: 2024-05-22 10:44:25
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-04 11:33:35
 * @FilePath: \xiaohu_demo_vue\src\store\userInfo.ts
 */
import dayjs from 'dayjs';
import { defineStore } from 'pinia';

type userInfo = {
  userName: string;
  sex: string;
  birthday: string;
  workExperience: number;
};
// 模拟用户请求接口
export const useUserInfoStore = defineStore('userInfo', {
  state: () => ({
    loginInfo: {
      userName: '',
      sex: '',
      birthday: '',
      workExperience: 0,
    },
  }),
  persist: true,
  getters: {
    age({ loginInfo }) {
      const { birthday } = loginInfo;
      if (!birthday) {
        return '';
      }
      const currentDay = dayjs();
      return currentDay.diff(birthday, 'year');
    },
  },
  actions: {
    async getUserDetial() {
      function infoFn() {
        return new Promise<{
          code: number;
          data: userInfo;
          message: string | null;
        }>((resolve, reject) => {
          setTimeout(() => {
            resolve({
              code: 200,
              data: {
                userName: '超级管理员',
                sex: '男',
                birthday: '1996-10-20',
                workExperience: 4,
              },
              message: null,
            });
          }, 2000);
        });
      }

      const res = await infoFn();
      if (res.code == 200) {
        this.loginInfo = res.data;
      }
    },
  },
});
