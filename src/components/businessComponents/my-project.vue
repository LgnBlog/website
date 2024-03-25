<!--
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-13 18:24:19
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-20 15:47:01
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
            <div class="cardImg"
                :style="{
                  backgroundImage: `url(${item2.imgUrl})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '100% 100%',
                }"
              >
              </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="introduce" v-if="item.type === 'introduce'">
        <div class="introduceLeft">
          <div class="title">{{ projectObj[item.id].title }}</div>
          <div class="title2">{{ projectObj[item.id].title2 }}</div>
          <div class="details">
            {{ projectObj[item.id].description }}
          </div>
        </div>
        <div class="introduceRight">
          <el-carousel height="460px" motion-blur>
            <el-carousel-item v-for="(item2, index) in projectObj[item.id].list" :key="index">
              <div class="cardImg"
                :style="{
                  backgroundImage: `url(${item2.imgUrl})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '100% 100%',
                }"
              >
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="card" v-if="item.type === 'webMobile'">
        <div class="cardLeft" 
          :style="{
            backgroundImage: `url(${projectObj[item.id].leftBox.imgUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
          }">
          <div class="title">{{ projectObj[item.id].leftBox.title }}</div>
          <div class="content">{{ projectObj[item.id].leftBox.description }}</div>
        </div>
        <div class="cardRight">
          <div class="detial" v-for="(itemR, index) in projectObj[item.id].rightBox" :key="index"
            :style="{
              backgroundImage: `url(${itemR.imgUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '100% 100%',
            }">
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
      .cardImg{
        height: 100%;
        width: 100%;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }

    .introduce {
      width: calc(100% - 150px);
      margin: auto;
      display: flex;

      .introduceLeft {
        width: 50%;
        height: 460px;
        font-size: 15px;
        background: rgba(204, 215, 236, 0.2);
        padding: 32px 56px 0px 58px;

        .title {
          font-size: 24px;
          color: #000000;
          letter-spacing: 1.5px;
          font-family: 'semibold';
          text-align: center;
        }

        .title2 {
          margin-top: 10px;
        }
      }

      .introduceRight {
        width: 50%;
        height: 100%;
        .cardImg{
          height: 100%;
          width: 100%;
        }
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
        color: #fff;
        padding: 18px;
      }

      .cardRight {
        width: 50%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;

        .detial {
          color: #fff;
        }

        >div {
          width: calc(50% - 20px);
          height: calc(50% - 20px);
          margin: 0 0 20px 20px;
          border-radius: 8px;
          padding: 12px;
          transition: transform 0.3s ease-in-out; /* 添加过渡效果，使放大缩小的过程平滑 */
        }
        >div:hover{
          transform: scale(1.02);
        }
      }

    }
  }

}
</style>