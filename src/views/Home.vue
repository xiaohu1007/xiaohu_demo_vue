<!--
 * @Description: 首页
 * @Author: wuhaohu
 * @Date: 2024-05-21 15:56:11
 * @LastEditors: wuhaohu
 * @LastEditTime: 2024-06-06 17:37:45
 * @FilePath: \xiaohu_demo_vue\src\views\home.vue
-->
<template>
  <header class="header scroll-header" id="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">xiaohu</a>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list grid">
          <li class="nav__item">
            <a href="#home" class="nav__link">
              <i class="uil uil-estate nav__icon"></i>
              <p>{{ $t('home')}}</p>
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">
              <i class="uil uil-user nav__icon"></i>
              <p>{{ $t('about')}}</p>
            </a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link">
              <i class="uil uil-file-alt nav__icon"></i>
              <p>{{ $t('skills')}}</p>
            </a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link">
              <i class="uil uil-scenery nav__icon"></i>
              <p>{{ $t('portfolio')}}</p>
            </a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">
              <i class="uil uil-message nav__icon"></i>
              <p>{{ $t('contact')}}</p>
            </a>
          </li>
          <li class="nav__item">
            <div class="nav__link" id="translate" value="en">
              <svg class="icon nav__icon-svg" aria-hidden="true">
                <use xlink:href="#icon-fanyi"></use>
              </svg>
              <a class="=nav__link" id="nav__translate">Translate</a>
            </div>
          </li>
        </ul>
        <i class="uil uil-times nav__close" id="nav-close"></i>
      </div>

      <div class="nav__btns">
        <i class="uil uil-moon change-theme" id="theme-button"></i>
        <div class="nav__toggle" id="nav-toggle">
          <i class="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts" name="home">

</script>

<style lang="scss" scoped></style>
