/*
 * @Description: 系统相关的数据
 * @Author: Hongzf
 * @Date: 2022-11-21 18:51:07
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-24 17:37:13
 */
// 定义数据类型
export interface AppState {
  // 菜单
  menu: {
    title: string
    icon?: string
    children?: Array<any>
  }[]
  // 侧边栏
  sidebar: {
    isCollapse: boolean
  }
}
// 定义state
const state: AppState = {
  menu: [],
  // 侧边栏
  sidebar: {
    isCollapse: false //是否收缩
  }
}

// 定义mutations：同步修改数据， mutation内部的函数会把state作为参数，
const mutations = {
  // 修改侧边栏的伸缩状态
  SET_COLLAPSE(state: AppState, value: boolean) {
    // 我们直接操作state.count就可以完成数据的修改。
    state.sidebar.isCollapse = value
  },
  // 保存菜单值
  SET_MENU(state: AppState, value: any) {
    // 我们直接操作state.count就可以完成数据的修改。
    state.menu = value
  }
}
export default {
  // namespaced: true,
  state,
  mutations
}
