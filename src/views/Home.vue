<!--
 * @Description: 
 * @Author: wuhaohu
 * @Date: 2024-05-21 15:56:11
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-05-21 17:25:04
 * @FilePath: \xiaohu_demo_vue\src\views\home.vue
-->
<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0"> </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">Processing Center</el-menu-item>
      </el-menu>
    </el-header>
    <el-main></el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeIndex = ref('1');
</script>

<style scoped></style>
