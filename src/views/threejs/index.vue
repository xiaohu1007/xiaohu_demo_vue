<!--
 * @Description: 首页
 * @Author: wuhaohu
 * @Date: 2024-05-21 15:56:11
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-07 17:17:52
 * @FilePath: \xiaohu_demo_vue\src\views\threejs\index.vue
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
import GUI from 'lil-gui';

// 纹理 Textures
const loadingManager = new THREE.LoadingManager(); // 加载器管理
const texturesLoader = new THREE.TextureLoader(loadingManager);
loadingManager.onStart = () => {
  console.log('onstart');
};
loadingManager.onLoad = () => {
  console.log('onLoad');
};
loadingManager.onProgress = () => {
  console.log('onProgress');
};
loadingManager.onError = () => {
  console.log('onError');
};
const doorColorTextures = texturesLoader.load(
  new URL('assets/images/door-1.jpg', import.meta.url).href,
);
// 颜色处理
doorColorTextures.colorSpace = THREE.SRGBColorSpace;
// 重复
// doorColorTextures.repeat.x = 2;
// doorColorTextures.repeat.y = 3;
// doorColorTextures.wrapS = THREE.MirroredRepeatWrapping;
// doorColorTextures.wrapT = THREE.MirroredRepeatWrapping;
// 位移
// doorColorTextures.offset.x = 0.5;
// doorColorTextures.offset.y = 0.5;
// 旋转
doorColorTextures.rotation = Math.PI * 0.25;
// 中心点
doorColorTextures.center.x = 0.5;
doorColorTextures.center.y = 0.5;
// 过滤器
doorColorTextures.minFilter = THREE.NearestFilter;

// const doorColor2Textures = texturesLoader.load(
//   new URL('assets/images/door-2.jpg', import.meta.url).href,
// );
// const doorColor3Textures = texturesLoader.load(
//   new URL('assets/images/door-3.jpg', import.meta.url).href,
// );
// const doorColor4Textures = texturesLoader.load(
//   new URL('assets/images/door-4.jpg', import.meta.url).href,
// );
// const doorColor5Textures = texturesLoader.load(
//   new URL('assets/images/door-5.jpg', import.meta.url).href,
// );
// const doorColor6Textures = texturesLoader.load(
//   new URL('assets/images/door-6.jpg', import.meta.url).href,
// );
// const doorColor7Textures = texturesLoader.load(
//   new URL('assets/images/door-7.jpg', import.meta.url).href,
// );

// debug gui
const gui = new GUI({
  width: 300,
  title: 'debug UI',
  closeFolders: true,
});
gui.close();
gui.hide();

window.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key == 'h') {
    gui.show(gui._hidden);
  }
});

const guiDebugObject: {
  color?: string;
  spin?: Function;
  subdivbision?: number;
} = {
  color: '#ff0000',
  subdivbision: 2,
};

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
    color: '#ff0000',
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
    new THREE.MeshBasicMaterial({ color: '#ff0000' }),
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

// 时钟 Clock
const clock = new THREE.Clock();

// 动画学习
function animationsLearn(scene: THREE.Scene, newMesh?: any) {
  const geometry = new THREE.BoxGeometry(1, 1, 1); // 物体 Geometry
  const material = new THREE.MeshBasicMaterial({
    color: '#ff0000',
    // wireframe: true,
  }); // 材质 material
  let mesh = new THREE.Mesh(geometry, material); // 网络 mesh
  if (!newMesh) {
    mesh = newMesh;
  }
  scene.add(mesh); // 添加进场景

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

  return { tick, adaptTime, gsapAnimation, animationsLearn };
}

// 循环执行
const animationTick = (callBack: any) => {
  callBack();
  window.requestAnimationFrame(() => {
    animationTick(callBack);
  });
};

// 几何体学习
const geometryLearn = () => {
  // 获取float32array
  const count = 50;
  const positionArray = new Float32Array(count * 3 * 3);

  Array(count * 3 * 3)
    .fill(0)
    .forEach((_item, index) => {
      positionArray[index] = Math.random();
    });

  // 生成positionAttribute
  const positionAttribute = new THREE.BufferAttribute(positionArray, 3);

  const geometry = new THREE.BufferGeometry(); // 物体 Geometry

  geometry.setAttribute('position', positionAttribute);

  const material = new THREE.MeshBasicMaterial({
    color: '#ff0000',
    wireframe: true,
  }); // 材质 material
  const mesh = new THREE.Mesh(geometry, material); // 网络 mesh
  return { mesh, geometryLearn, groupLearn, animationsLearn, baseLearn };
};

// debug学习
const guiDebugLearn = (
  mesh: THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >,
  material: THREE.MeshBasicMaterial,
) => {
  const cube = gui.addFolder('cube');

  cube.add(mesh.position, 'y', -3, 3, 0.01);
  cube.add(mesh, 'visible');
  cube.add(material, 'wireframe');
  cube.addColor(guiDebugObject, 'color').onChange(() => {
    material.color.set(guiDebugObject.color || '#ff0000');
  });

  guiDebugObject.spin = () => {
    gsap.to(mesh.rotation, { y: mesh.rotation.y + Math.PI * 2 });
  };
  cube.add(guiDebugObject, 'spin');

  cube
    .add(guiDebugObject, 'subdivbision')
    .min(1)
    .max(20)
    .step(1)
    .onFinishChange(() => {
      mesh.geometry.dispose();
      mesh.geometry = new THREE.BoxGeometry(
        1,
        1,
        1,
        guiDebugObject.subdivbision,
        guiDebugObject.subdivbision,
        guiDebugObject.subdivbision,
      );
    });
};

// 纹理学习
const materialLearn = (scene: THREE.Scene, renderer: THREE.WebGLRenderer) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // console.log(geometry.attributes.uv, ' ===> geometry.attributes.uv');

  //基础网格材质
  const material = new THREE.MeshBasicMaterial();
  material.map = doorColorTextures;

  const cube = new THREE.Mesh(geometry, material);

  cube.position.y = 1.5;

  // material.color = new THREE.Color('pink');
  // material.wireframe = true;
  // material.opacity = 0.5;
  // material.transparent = true;
  // material.alphaMap = doorColor2Textures;
  // material.side = THREE.DoubleSide;

  const shpere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    material,
  );

  shpere.position.set(-1.5, 0, 0);

  const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);

  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 16, 32),
    material,
  );
  torus.position.set(1.5, 0, 0);

  scene.add(shpere, plane, torus, cube);

  const camera = new THREE.PerspectiveCamera(
    75,
    size.width / size.height,
    0.1,
    100,
  );

  camera.position.set(0, 0, 3);

  scene.add(camera);

  animationTick(() => {
    const elapsedTime = clock.getElapsedTime();
    shpere.rotation.y = elapsedTime * 0.1;
    plane.rotation.y = elapsedTime * 0.1;
    torus.rotation.y = elapsedTime * 0.1;

    shpere.rotation.x = elapsedTime * 0.15;
    plane.rotation.x = elapsedTime * 0.15;
    torus.rotation.x = elapsedTime * 0.15;

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

  return { material, cameraLearn, camera };
};

// 相机学习
function cameraLearn(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
  const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2); // 物体 Geometry
  const material = new THREE.MeshBasicMaterial({
    color: guiDebugObject.color,
    wireframe: true,
  }); // 材质 material

  const mesh = new THREE.Mesh(geometry, material); // 网络 mesh
  // const { mesh } = geometryLearn();

  scene.add(mesh);

  // debug配置
  guiDebugLearn(mesh, material);

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
  // const camera = cameraLearn(scene, renderer);

  // 纹理学习 material
  const { camera } = materialLearn(scene, renderer);

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
