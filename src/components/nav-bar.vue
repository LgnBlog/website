<!--
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-13 18:24:19
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-15 15:39:54
 * @FilePath: \website\src\components\nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="bg-block">
    <div class="nav-block">
      <div class="logo">LGN</div>
      <div class="nav">
        <span @click="handleClick('/myProject')" target="_blank">项目</span>
        <span @click="handleClick('/myResume')" target="_blank">友链工具</span>
        <span @click="handleClick('/linkFriend')" target="_blank">个人简历</span>
      </div>
    </div>
    <div class="selectInfo">
      <div class="space">
        <el-input v-model="selectVal" style="max-width: 600px" placeholder="搜索...">
          <template #append> <el-button :icon="Search" /></template>
        </el-input>
      </div>
      <el-anchor :offset="70" direction="horizontal">
        <el-anchor-link v-for="item in projectArr" :key="item.id" :href="`#${item.id}`" :title="item.title">
        </el-anchor-link>
      </el-anchor>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { projectArr } from '@/utills/const';
const handleClick = (path = '/') => {
  alert(path)
  router.push(path);
};

const selectVal = ref()
</script>

<style lang="scss" scoped>
.bg-block {
  width: 100%;
  height: 260px;
  background: url('@/assets/img/bgs2.jpg') no-repeat center;
  // background: skyblue no-repeat center;
  background-size: 100% 100%;

  .nav-block {
    max-width: calc(100% - 80px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 84px;
    line-height: 84px;
    display: flex;
    margin: auto;

    .logo {
      font-size: 24px;
    }

    .nav {
      display: flex;

      span {
        // color: #909399;
        font-size: 14px;
        margin: 0 10px;
        cursor: pointer;
        color: #ffffff;
      }

      span:hover {
        color: #2671fc;
      }
    }
  }

  .selectInfo {
    display: flex;
    flex-direction: column;
    align-items: center;

    >div {
      min-width: 600px;
      background-color: transparent;

    }
  }
}
:deep(.el-input__inner) {
  padding: 10px 0;
  height: auto;
  // margin-bottom: 10px;
}

:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0 30px;
  background-color: #6a70e9;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
}

:deep(.el-input__wrapper){
 box-shadow: 0 0 0 0px #6a70e9;
}
:deep(.el-anchor__list){
  margin-top: 10px;
  .el-anchor__link{
    color: #fff;
  }
}
</style>