<!--
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-13 18:24:19
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-18 18:22:04
 * @FilePath: \website\src\components\nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="project">
    <div class="item" v-for="(item) in contentArr" :key="item.id" :id="item.id">
      <div class="projectTit">
        <span>#</span>{{ item.title }}
      </div>
      <div class="imgsBlock" v-if="item.type === 'carousel'">
        <el-carousel :interval="2000" type="card" height="400px">
          <el-carousel-item v-for="item2 in projectObj[item.id]" :key="item2.id">
            <img :src="item2.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="card" v-if="item.type === 'card'">
        <div class="cardLeft">
          <img :src="projectObj[item.id].leftBox.imgUrl" alt="">
          <div class="title">{{ projectObj[item.id].leftBox.title }}</div>
          <div class="content">{{ projectObj[item.id].leftBox.description }}</div>
        </div>
        <div class="cardRight">
          <div class="detial" v-for="(itemR, index) in projectObj[item.id].rightBox" :key="index">
            <img :src="itemR.imgUrl" alt="">
            <div class="title">{{ itemR.title }}</div>
            <div class="content">{{ itemR.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { projectArr, projectObj } from '@/utills/const';
// import { getImageUrl } from '@/utills';
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
      margin: 30px;
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
      width: calc(100% - 90px);
      margin: auto;
      height: 100%;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .card {
      height: 420px;
      width: 92%;
      margin: auto;
      display: flex;

      .cardLeft {
        width: 50%;
        height: calc(100% - 20px);
        border-radius: 8px;
        position: relative;
        color: #fff;

        img {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          border-radius: 8px;
        }
      }

      .cardRight {
        width: 50%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        color: #fff;
        .detial {
          position: relative;

          img {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: -1;
            border-radius: 8px;
          }
        }

        >div {
          width: calc(50% - 20px);
          height: calc(50% - 20px);
          margin: 0 0 20px 20px;
        }
      }

    }
  }

}
</style>