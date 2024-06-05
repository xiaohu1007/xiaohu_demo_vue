<!--
 * @Description: 首页
 * @Author: wuhaohu
 * @Date: 2024-05-21 15:56:11
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-05 17:46:25
 * @FilePath: \xiaohu_demo_vue\src\views\home.vue
-->
<template>
  <canvas
    @mousemove="cursorMove"
    @dblclick="cursorDblclick"
    ref="canvasRef"
  ></canvas>
</template>

<script setup lang="ts" name="home">
import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const router = useRouter();

// 鼠标双击
const cursorDblclick = () => {
  // 兼容safari
  const fullscreenElement =
    document.fullscreenElement ||
    ((document as any).webkitFullscreenElement as Element);

  if (fullscreenElement) {
    if (document?.exitFullscreen) {
      document?.exitFullscreen();
    } else if ((document as any)?.webkitExitFullscreen) {
      (document as any)?.webkitExitFullscreen();
    }
  } else {
    if (canvasRef.value?.requestFullscreen) {
      canvasRef.value?.requestFullscreen();
    } else if ((canvasRef.value as any)?.webkitRequestFullscreen) {
      (canvasRef.value as any)?.webkitRequestFullscreen();
    }
  }

  
  router.push({ path: '/threejs' })
};

// 鼠标移动监听
const cursor = {
  x: 0,
  y: 0,
};
const cursorMove = (e: MouseEvent) => {
  cursor.x = e.clientX / size.width - 0.5;
  cursor.y = -(e.clientY / size.height - 0.5);
};

// 获取画布
const canvasRef = ref<HTMLCanvasElement | null>(null);

// 画布大小
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// 基本要素学习
function baseLearn(scene: THREE.Scene) {
  const geometry = new THREE.BoxGeometry(1, 1, 1); // 物体 Geometry
  const material = new THREE.MeshBasicMaterial({
    color: 'red',
    // wireframe: true,
  }); // 材质 material
  const mesh = new THREE.Mesh(geometry, material); // 网络 mesh
  scene.add(mesh); // 添加进场景
  mesh.position.set(0.7, -0.6, 1); // 位移 position
  mesh.scale.set(2, 0.5, 0.5); // 缩放 scale
  mesh.rotation.set(Math.PI * 0.25, Math.PI * 0.25, 0, 'YXZ'); // 旋转 rotation
  return { geometry, mesh, material };
}

// 组学习
function groupLearn(scene: THREE.Scene) {
  const group = new THREE.Group();
  scene.add(group);

  const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'red' }),
  );
  group.add(cube1);

  const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'green' }),
  );
  cube2.position.x = -2;
  group.add(cube2);

  const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
  );
  cube3.position.x = 2;
  group.add(cube3);

  group.position.set(0, 1, 0);
  group.rotation.set(Math.PI * 0.25, Math.PI * 0.25, 0, 'YXZ');
  group.scale.set(0.75, 0.75, 1);

  return { group };
}

// 动画学习
function animationsLearn(scene: THREE.Scene, newMesh?: any) {
  const geometry = new THREE.BoxGeometry(1, 1, 1); // 物体 Geometry
  const material = new THREE.MeshBasicMaterial({
    color: 'red',
    // wireframe: true,
  }); // 材质 material
  let mesh = new THREE.Mesh(geometry, material); // 网络 mesh
  if (!newMesh) {
    mesh = newMesh;
  }
  scene.add(mesh); // 添加进场景

  // 时钟 Clock
  const clock = new THREE.Clock();

  // 当前时间 time
  let time = Date.now();

  // 适应时间帧率
  const adaptTime = (callBack: any) => {
    const curTime = Date.now();
    const deltaTime = curTime - time;
    time = curTime;
    callBack(deltaTime);
  };
  const adaptClock = (callBack: any) => {
    // 获取过去时间
    const elapsedTime = clock.getElapsedTime();
    callBack(elapsedTime);
  };

  // gsap 动画
  const gsapAnimation = () => {
    gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
    gsap.to(mesh.position, { duration: 1, delay: 2, x: -2 });
  };

  console.log(adaptTime, gsapAnimation);

  // gsapAnimation();

  // animation
  const tick = (callBack: any, camera: any) => {
    // adaptTime((deltaTime: number) => {
    //   mesh.rotation.y += 0.001 * deltaTime;
    // });

    adaptClock((elapsedTime: number) => {
      mesh.rotation.y = elapsedTime * Math.PI * 0.3;
      // camera.rotation.y = elapsedTime * Math.PI * 0.3;
      // camera.position.x = Math.cos(elapsedTime);
      // camera.position.y = Math.sin(elapsedTime);
      camera.lookAt(mesh.position);
    });

    callBack();
    window.requestAnimationFrame(() => {
      tick(callBack, camera);
    });
  };

  return { tick };
}

console.log(animationsLearn, groupLearn, baseLearn);

// 循环执行
const animationTick = (callBack: any) => {
  callBack();
  window.requestAnimationFrame(() => {
    animationTick(callBack);
  });
};

// 相机学习
function cameraLearn(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
  const geometry = new THREE.BoxGeometry(1, 1, 1); // 物体 Geometry
  const material = new THREE.MeshBasicMaterial({
    color: 'red',
    // wireframe: true,
  }); // 材质 material
  const mesh = new THREE.Mesh(geometry, material); // 网络 mesh

  scene.add(mesh);

  // 透视相机
  const camera = new THREE.PerspectiveCamera(
    75,
    size.width / size.height,
    0.1,
    100,
  );

  // 正交相机
  // const aspectRatio = size.width / size.height;
  // const camera = new THREE.OrthographicCamera(
  //   -1 * aspectRatio,
  //   1 * aspectRatio,
  //   1,
  //   -1,
  //   0.1,
  //   100,
  // );

  camera.position.set(0, 0, 3);

  camera.lookAt(mesh.position);

  scene.add(camera);

  animationTick(() => {
    // camera.position.x = cursor.x * 3;
    // camera.position.y = cursor.y * 3;

    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
    // camera.position.y = cursor.y * 5;
    // camera.lookAt(mesh.position);
    renderer.render(scene, camera);
  });

  // 监听宽度
  window.onresize = () => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;

    // 更新画布
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  return camera;
}

onMounted(() => {
  if (!canvasRef.value) return;

  // 场景 Scene
  const scene = new THREE.Scene();

  // 对象 Object
  // const { geometry, mesh, material } = baseLearn(scene);
  // groupLearn(scene);

  // 轴 Axes helper
  const axesHelper = new THREE.AxesHelper(3);
  scene.add(axesHelper);

  // 相机 camera
  // const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
  // camera.position.set(0, 0, 3);
  // scene.add(camera);

  // 渲染器 renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
  });
  renderer.setSize(size.width, size.height);

  // 相机学习 cameras
  const camera = cameraLearn(scene, renderer);

  // 控制器 Controls
  const controls = new OrbitControls(camera, canvasRef.value);
  controls.enableDamping = true;

  // 执行动画 animationsLearn
  // const { tick } = animationsLearn(scene);
  // tick(() => {
  //   renderer.render(scene, camera);
  // }, camera);
  animationTick(() => {
    controls.update();
    renderer.render(scene, camera);
  });
  renderer.render(scene, camera);

  console.log(scene, canvasRef, '===>', canvasRef.value);
});
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
