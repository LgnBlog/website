<!-- eslint-disable no-undef -->
<!--
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-13 17:28:50
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-13 18:10:42
 * @FilePath: \website\src\views\homePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container" ref="container" @scroll="handleScroll">
    <!-- 已加载的内容 -->
    <div v-for="(item, index) in items" :key="index">{{ item }}</div>
    <!-- 加载更多的提示信息 -->
    <div v-if="loading">Loading...</div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';

// 使用ref来引用container
const containerRef = ref(null);

// 定义响应式数据
const items = ref([]); // 已加载的内容
const loading = ref(false); // 是否正在加载

// 滚动事件处理函数
const handleScroll = () => {
  const container = containerRef.value; // 获取滚动容器
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    // 滚动到底部，触发加载更多内容
    loadMore();
  }
};

// 加载更多内容的函数
const loadMore = async () => {
  if (!loading.value) {
    loading.value = true;
    // 模拟请求数据的异步操作
    setTimeout(() => {
      // 模拟获取到的新数据
      const newData = ['New Item 1', 'New Item 2', 'New Item 3'];
      // 将新数据添加到已加载的内容中
      items.value = [...items.value, ...newData];
      loading.value = false;
    }, 1000);
  }
};

onMounted(()=>{
  loadMore();
})
</script>

<style scoped>
.container {
  height: 300px; /* 滚动容器的高度 */
  overflow-y: auto; /* 竖直方向滚动 */
}
</style>
