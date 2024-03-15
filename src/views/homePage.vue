<!--
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-13 17:28:50
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-15 10:27:22
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
.contents{
  width: calc(100% - 100px);
  margin: 0 auto;
}
</style>