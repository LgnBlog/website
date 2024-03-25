/*
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-15 15:20:25
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-19 18:35:23
 * @FilePath: \website\src\utills\const.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const projectArr = [
  {
    title: '智慧大屏低代码平台',
    content: '智慧大屏',
    id: 'largeScreen',
    type: 'carousel'
  },
  {
    title: '招募系统',
    content: '招募系统',
    id: 'introduce',
    type: 'introduce'
  },
  {
    title: '智慧血液移动端',
    content: '智慧血液移动端',
    id: 'webMobile',
    type: 'webMobile'
  }
]

const projectObj = {
  largeScreen: [
    {
      imgUrl: new URL('@/assets/img/bg4.png', import.meta.url).href,
      description: '',
      title: '',
      id: '1'
    },
    {
      imgUrl: new URL('@/assets/img/bg5.jpg', import.meta.url).href,
      description: '',
      title: '',
      id: '2'
    },
    {
      imgUrl: new URL('@/assets/img/bg5.jpg', import.meta.url).href,
      description: '',
      title: '',
      id: '3'
    },
    {
      imgUrl: new URL('@/assets/img/bgs8.jpg', import.meta.url).href,
      description: '',
      title: '',
      id: '4'
    }
  ],
  webMobile: {
    leftBox: {
      imgUrl: new URL('@/assets/img/bgs8.jpg', import.meta.url).href,
      description: '项目介绍',
      title: '标题',
    },
    rightBox:[{
      imgUrl: new URL('@/assets/img/bgs9.jpg', import.meta.url).href,
      description: '项目介绍',
      title: '标题',
    },{
      imgUrl: new URL('@/assets/img/bgs12.jpg', import.meta.url).href,
      description: '项目介绍',
      title: '标题',
    },{
      imgUrl: new URL('@/assets/img/bgs12.jpg', import.meta.url).href,
      description: '项目介绍',
      title: '标题',
    },{
      imgUrl: new URL('@/assets/img/bgs12.jpg', import.meta.url).href,
      description: '项目介绍',
      title: '标题',
    }]
  },
  introduce: {
    title: '项目介绍',
    title2: '致力于血液行业的智慧采血用血平台',
    description: '项目介绍内容',
    imgUrl: new URL('@/assets/img/bgs12.jpg', import.meta.url).href,
    list: [{
      imgUrl: new URL('@/assets/img/bgs12.jpg', import.meta.url).href,
      description: '项目介绍',
      title: '标题',
    },{
      imgUrl: new URL('@/assets/img/bgs12.jpg', import.meta.url).href,
      description: '项目介绍',
      title: '标题',
    },{
      imgUrl: new URL('@/assets/img/bgs12.jpg', import.meta.url).href,
      description: '项目介绍',
      title: '标题',
    }]
  }
}

export { projectArr, projectObj }
