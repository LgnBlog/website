/*
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-08 18:20:07
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-15 14:15:02
 * @FilePath: \website\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.scss'

// 如果您正在使用CDN引入，请删除下面一行。


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
