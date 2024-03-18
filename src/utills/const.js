/*
 * @Author: Li GuangNing lign@stpass.com
 * @Date: 2024-03-15 15:20:25
 * @LastEditors: Li GuangNing lign@stpass.com
 * @LastEditTime: 2024-03-18 18:18:45
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
    id: 'recruitSys',
    type: 'card'
  },
  {
    title: '智慧血液H5',
    content: '智慧血液H5',
    id: 'H5',
    type: 'flow'
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
  recruitSys: {
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
  H5: []
}

export { projectArr, projectObj }
