<!--
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-13 17:28:50
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-20 11:46:44
 * @FilePath: \website\src\views\homePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <navBar></navBar>
  <div class="contents">
    <router-view />
  </div>
  <footerInfo></footerInfo>
</template>

<script setup>
import { RouterView } from 'vue-router'
import navBar from '@/components/nav-bar.vue';
import footerInfo from '@/components/footer-info.vue';

</script>

<style lang="scss" scoped>
.contents {
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
  background-image: linear-gradient(-35deg, #eef7ff, #ffffff);
  // background: url('@/assets/img/bgA.png') no-repeat center;
  // background-size: 100% 100%;
}
</style>