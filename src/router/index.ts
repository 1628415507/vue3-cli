// src/router/index.ts

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'app',
    meta: {
      title: 'app'
    },
    component: () => import('@/App.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home-page.vue')
  },
  {
    path: '/router',
    name: 'Router',
    component: () => import('@/views/router-page.vue')
  },
  // 替代vue2中的'*'通配符路径
  // { path: '/:pathMatch(.*)*', redirect: '/' }
  { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes
})
export default router
