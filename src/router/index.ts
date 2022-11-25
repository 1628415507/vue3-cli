/*
 * @Author: Hongzf
 * @Date: 2022-11-21 18:51:07
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-25 11:36:03
 * @Description:
 */
// src/router/index.ts

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import constantRoute from './constantRoutes' // 默认基本页面的路由
import asyncRoute from './asyncRoutes' // 异步请求的路由

// 默认的路由
export const constantRoutes: Array<RouteRecordRaw> = constantRoute
// 异步请求的路由
export const asyncRoutes: Array<RouteRecordRaw> = asyncRoute

const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes: constantRoute.concat(asyncRoutes) //设置路由
})
export default router
