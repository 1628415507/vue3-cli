/*
 * @Description: 默认的路由，如登录等基本页面
 * @Author: Hongzf
 * @Date: 2022-11-25 09:42:54
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-25 11:34:11
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue' // 引入布局页面

const constantRoutes: Array<RouteRecordRaw> = [
  // 基础布局
  {
    path: '/',
    component: Layout,
    meta: { title: '首页', hidden: true }
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', hidden: true }
  }
  // {
  // 替代vue2中的'*'通配符路径
  // { path: '/:pathMatch(.*)*', redirect: '/' }
]
export default constantRoutes
