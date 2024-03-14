<!--
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-13 18:24:19
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-14 18:30:07
 * @FilePath: \website\src\components\nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="navBox">
    <div class="logo">LGN</div>
    <div class="nav">
      <div class="navItem">
        <span @click="handleClick('/myProject')" target="_blank">项目</span>
        <span @click="handleClick('/myResume')" target="_blank">友链工具</span>
        <span @click="handleClick('/linkFriend')" target="_blank">个人简历</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';

const handleClick = (path = '/') => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.navBox {
  max-width: calc(100% - 80px);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  line-height: 64px;
  display: flex;

  .logo {
    font-size: 24px;
  }

  .navItem {
    display: flex;
    span{
      color: #909399;
      font-size: 14px;
      margin: 0 10px;
      cursor: pointer;
    }
    span:hover{
      color: #409EFF;
    }
  }
}
</style>