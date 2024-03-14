<!--
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-13 18:24:19
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-14 18:33:01
 * @FilePath: \website\src\components\nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="project">
    <el-anchor :offset="70" direction="horizontal">
      <el-anchor-link href="#part1" title="项目一">
      </el-anchor-link>
      <el-anchor-link href="#part2" title="项目二">
      </el-anchor-link>
      <el-anchor-link href="#part3" title="项目三">
      </el-anchor-link>
      <div class="item" v-for="(item) in contentArr" :key="item.id" :id="item.id">
        {{ item.title }}
      </div>
    </el-anchor>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const contentArr = ref([])
contentArr.value = [{
  title: '区域1',
  content: 'content',
  id: 'part1'
}, {
  title: '区域2',
  content: 'content',
  id: 'part2'
}, {
  title: '区域3',
  content: 'content',
  id: 'part3'
}]
</script>

<style lang="scss" scoped>
.project {
  .item{
    margin: 10px 0;
    height: 400px;
  }
  
}
</style>