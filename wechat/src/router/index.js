import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home', 
    name: 'Home', 
    component: () => import('@/views/home/index.vue'),
    meta: {title: '首页😀',keepAlive: true},
  },
  {path: '/addressbook', name: 'AddressBook', component: () => import('@/views/addressBook/index.vue'), meta: {title: '通讯'}},
  {path: '/discover', name: 'Discover', component: () => import('@/views/discover/index.vue'), meta: {title: '发现'}},
  {path: '/my', name: 'My', component: () => import('@/views/my/index.vue'), meta: {title: '我的'}},
  {path: '/moments', name: 'Moments', component: () => import('@/views/moments/index.vue'), meta: {title: '朋友圈'}},
]

// 创建路由实例对象
const router = createRouter({
  // 通过createWebHashHistory属性指定路由工作模式
  history: createWebHashHistory(),
  routes
})


//共享路由
export default router
