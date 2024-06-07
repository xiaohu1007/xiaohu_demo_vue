<!--
 * @Description: 
 * @Author: wuhaohu
 * @Date: 2024-06-07 14:17:43
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-07 14:17:47
 * @FilePath: \xiaohu_demo_vue\src\components\ThemeSwitch.vue
-->
<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      {{ themeModeMap.get(currentTheme) }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          :command="themeModeEntry[0]"
          :key="themeModeEntry[0]"
          :disabled="currentTheme == themeModeEntry[0]"
          v-for="themeModeEntry in themeModeMap.entries()"
          >{{ themeModeEntry[1] }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { ref } from "vue";
import themeUtils, { themeModeMap } from "@/utils/themeUtils";
import { useAppStore } from "@/store/modules/appStore";

const appStore = useAppStore();
const currentTheme = ref(appStore.theme);

// 切换主题
function handleCommand(theme: string) {
  currentTheme.value = theme;
  themeUtils.themeChange(theme);
}
</script>
<style scoped lang="scss">
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: $primaryColor;
  display: flex;
  align-items: center;
}
</style>
