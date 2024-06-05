<!--
 * @Description: 首页
 * @Author: wuhaohu
 * @Date: 2024-05-21 15:56:11
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-05 09:18:15
 * @FilePath: \xiaohu_demo_vue\src\views\home.vue
-->
<template>
  <div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts" name="home">
import * as THREE from 'three';

// 获取画布
const canvasRef = ref();

onMounted(() => {
  // 画布大小
  const size = {
    width: 800,
    height: 600,
  };

  // 场景 Scene
  const scene = new THREE.Scene();

  // 对象 Object
  const geometry = new THREE.BoxGeometry(1, 1, 1); // 物体 Geometry
  const material = new THREE.MeshBasicMaterial({
    color: 'red',
    wireframe: true,
  }); // 材质 material
  const mesh = new THREE.Mesh(geometry, material); // 网络 mesh
  scene.add(mesh); // 添加进场景

  // 相机 camera
  const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
  camera.position.z = 3;
  scene.add(camera);

  // 渲染器 renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
  });
  renderer.setSize(size.width, size.height);
  renderer.render(scene, camera);

  console.log(scene, canvasRef, '===>', canvasRef.value);
});
</script>

<style scoped></style>
