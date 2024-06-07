<!--
 * @Description: 
 * @Author: wuhaohu
 * @Date: 2024-06-07 14:15:57
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-07 14:17:15
 * @FilePath: \xiaohu_demo_vue\src\components\SvgIcon.vue
-->
<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :style="{ width: size + 'px', height: size + 'px' }"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>
<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 18,
  },
});
const symbolId = computed(() => `#icon-${props.name}`);
</script>

<style scoped>
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
  overflow: hidden;
  width: 30px;
  height: 30px;
}
</style>
