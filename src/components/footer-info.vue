<!--
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-13 18:24:19
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-15 18:10:07
 * @FilePath: \website\src\components\nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="footer">
    <div class="contactBlock">
      <div class="title">联系我</div>
      <div class="item">邮箱：GuangNing_li@163.com</div>
      <div class="item">微信：LI-Craig</div>
      <div class="item">QQ：2320396478</div>
    </div>
    <div class="wx">
      <div class="item">微信扫码</div>
      <img src="@/assets/img/wx.png" alt="微信号">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  max-width: calc(100% - 80px);
  margin: auto;
  display: flex;
  align-items: center;
  height: 180px;
  display: flex;
  justify-content: space-evenly;

  .contactBlock {
    .title {
      color: #2a2a2a;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 30px;
      white-space: nowrap;
    }

    .item {
      color: #7a7a7a;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      text-decoration: none;
      white-space: nowrap;
      margin: 0 0 10px 0;
    }
  }

  .wx {
    color: #555555;
    font-size: 14px;
    font-style: normal;

    img {
      width: 100px;
    }
  }
}
</style>