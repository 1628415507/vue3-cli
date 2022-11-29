/*
 * @Description: 系统相关的数据
 * @Author: Hongzf
 * @Date: 2022-11-21 18:51:07
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-29 15:22:45
 */
import { RouteRecordRaw } from 'vue-router'
import { constantRoutes, asyncRoutes } from '@/router'
import { MutationTree } from 'vuex'

// 定义数据类型
export interface AppState {
  // 路由菜单，RouteRecordRaw[] 某个类型+[] 	表示语法定义类型为某个类型组成的数组
  routes: Array<RouteRecordRaw> //固定+动态路由，
  dynamicRoutes: Array<RouteRecordRaw> //动态路由，异步请求的路由
  // 侧边栏
  sidebar: {
    isCollapse: boolean
  }
}
// 定义state
const state: AppState = {
  routes: [],
  dynamicRoutes: [],
  // 侧边栏
  sidebar: {
    isCollapse: false //是否收缩
  }
}

// 定义mutations：同步修改数据， mutation内部的函数会把state作为参数，
const mutations: MutationTree<AppState> = {
  // 修改侧边栏的伸缩状态
  SET_COLLAPSE(state: AppState, value: boolean) {
    state.sidebar.isCollapse = value
  },
  // 保存路由
  SET_ROUTES(state: AppState, value: Array<RouteRecordRaw>) {
    console.log('【 SET_ROUTES 】-39', value)
    // 保存固定+动态路由
    state.routes = constantRoutes.concat(value)
    // 保存动态路由
    state.dynamicRoutes = value
  }
}
const actions = {
  // TODO:ts
  ACTION_SET_ROUTES({ commit }: any) {
    console.log('【 ACTION_SET_ROUTES-动态路由赋值 】-49')
    // 调取接口获取动态路由
    commit('SET_ROUTES', asyncRoutes)
  }
}
export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
