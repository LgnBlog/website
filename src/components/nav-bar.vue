<!--
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-13 18:24:19
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-20 17:02:21
 * @FilePath: \website\src\components\nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="bg-block">
    <div class="nav-block">
      <div class="logo">LGN-五年前端开发</div>
      <div class="nav">
        <span @click="handleClick('/myProject')" target="_blank">项目</span>
        <span @click="handleClick('/myResume')" target="_blank">友链工具</span>
        <span @click="handleClick('/linkFriend')" target="_blank">个人简历</span>
        <span class="chat">
          <el-popover placement="top-start" title="扫码加微信" :width="110" trigger="hover"
            content="">
            <img style="width: 100px;" src="@/assets/img/wx.png" alt="微信号">
            <template #reference>
              <el-icon >
                <ChatDotRound />
              </el-icon>
            </template>
          </el-popover>
        </span>
      </div>
    </div>
    <div class="selectInfo">
      <div class="space">
        <el-input v-model="selectVal" style="max-width: 600px" placeholder="搜索...">
          <template #append> <el-button :icon="Search" /></template>
        </el-input>
      </div>
      <el-anchor :offset="70" direction="horizontal">
        <el-anchor-link v-for="item in projectArr" :key="item.id" :href="handleHref(item)" :title="item.title">
        </el-anchor-link>
      </el-anchor>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import { useRouter } from 'vue-router';
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { projectArr } from '@/utills/const';
const handleClick = (path = '/') => {
  router.push(path);
};
const handleHref = (item) => {
  const router = useRouter()
  if(router.currentRoute.value.path == '/myProject'){
    return `#${item.id}`;
  }else{
    return `/myProject#${item.id}`;
  }
};
const selectVal = ref()
</script>

<style lang="scss" scoped>
.bg-block {
  width: 100%;
  height: 390px;
  background: url('@/assets/img/bgs14.png') no-repeat center;
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
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(90deg, #e7a62e, #00a08b);
      color: #fff;
    }

    .nav {
      display: flex;

      span {
        // color: #909399;
        font-size: 15px;
        margin: 0 10px;
        cursor: pointer;
        color: #ffffff;
      }

      span:hover {
        color: rgb(73, 177, 73);
      }

      .chat {
        font-size: 20px;
        color: rgb(56, 240, 56);
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

:deep(.el-input__wrapper) {
  box-shadow: 0 0 0 0px #6a70e9;
}
:deep(.el-anchor__marker) {
  background-color: #0075ed;
}

:deep(.el-anchor__list) {
  margin-top: 10px;

  .el-anchor__link {
    // color: #ffffff;
    // color: #474545;
    font-size: 14px;
  }
}
</style>