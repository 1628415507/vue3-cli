/*
 * @Description: 系统相关的数据
 * @Author: Hongzf
 * @Date: 2022-11-21 18:51:07
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-29 18:03:45
 */
import { ActionTree, Module, MutationTree } from 'vuex'
import { RouteRecordRaw } from 'vue-router'
import { constantRoutes, asyncRoutes } from '@/router'
import { RootState } from '@/store'

// 定义数据类型
export interface AppState {
  // 路由菜单
  // RouteRecordRaw[]等同于Array<RouteRecordRaw>,某个类型+[] 	表示语法定义类型为某个类型组成的数组
  routes: Array<RouteRecordRaw> //固定路由+动态路由，
  dynamicRoutes: RouteRecordRaw[] //动态路由，异步请求的路由
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
// mutations的类型MutationTree只接收了一个泛型，并且这个泛型只应用到本模块state上。
const mutations: MutationTree<AppState> = {
  // 设置侧边栏的伸缩状态
  SET_COLLAPSE(state: AppState, value: boolean) {
    state.sidebar.isCollapse = value
  },
  // 保存路由
  SET_ROUTES(state: AppState, value: RouteRecordRaw[]) {
    state.routes = constantRoutes.concat(value) // 保存固定+动态路由
    state.dynamicRoutes = value // 保存动态路由
  }
}
// 定义actions：异步修改数据
// actions的类型ActionTree<S, R>接收了两个泛型。并且也将这两个泛型分别应用在本模块state上和根state上
const actions: ActionTree<AppState, RootState> = {
  ACTION_SET_ROUTES({ commit }) {
    console.log('【 ACTION_SET_ROUTES-动态路由赋值 】-49')
    // TODO:调取接口获取动态路由
    commit('SET_ROUTES', asyncRoutes)
  }
}
// 模块的类型是Module，并且需要传递本模块state类型和根state类型。
export const store: Module<AppState, RootState> = {
  // namespaced为true的作用是告诉vuex，
  // 该模块所有的state 、getters、mutations、actions里面的东西调用时都需要加上命名空间，
  // 详见：https://www.mulingyuer.com/archives/360/
  // 在打开名称空间选项的情况下，如何将分派与操作类型一起使用存在问题。。。
  // 但如果没有它，项目大时可能会在命名上发生冲突
  // namespaced: true,
  state,
  mutations,
  actions
}
export default store
