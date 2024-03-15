<!--
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-13 18:24:19
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-15 16:20:31
 * @FilePath: \website\src\components\nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="project">
    <div class="item" v-for="(item) in contentArr" :key="item.id" :id="item.id">
      <div class="projectTit">
        <span>#</span>{{ item.title }}
      </div>
      <div class="imgsBlock">
        <el-carousel :interval="2000" type="card" height="400px">
          <el-carousel-item v-for="item2 in projectObj[item.id]" :key="item2.id">
            <div class="card">
              <img src="@/assets/img/bgs2.jpg" alt="" />{{ item2.imgUrl }}
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { projectArr, projectObj } from '@/utills/const';
const contentArr = ref([])
contentArr.value = projectArr
</script>

<style lang="scss" scoped>
.project {
  .item {
    margin: 10px 0;
    height: 600px;

    .projectTit {
      color: #2a2a2a;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 40px;
      margin-bottom: 30px;
      cursor: pointer;

      span {
        font-size: 28px;
        color: #ffffff;
        font-weight: bold;
        margin-right: 10px;
      }
    }

    .projectTit:hover {
      span {
        color: rgb(0, 112, 177);
      }
    }

    .imgsBlock {
      .card{
        background: skyblue;
        height: 100%;
      }
    }
  }

}
</style>