/*
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-08 18:20:07
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-14 18:05:59
 * @FilePath: \website\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: () => import('../views/homePage.vue'),
      redirect: '/myProject',
      children: [
        {
          path: '/homePage',
          name: 'homePage',
          component: () => import('../views/homePage.vue')
        },
        {
          path: '/myResume',
          name: 'myResume',
          component: () => import('@/components/businessComponents/my-resume.vue')
        },
        {
          path: '/linkFriend',
          name: 'linkFriend',
          component: () => import('@/components/businessComponents/friend-link.vue')
        },
        {
          path: '/myProject',
          name: 'myProject',
          component: () => import('@/components/businessComponents/my-project.vue')
        }
      ]
    }
  ]
})

export default router
