/*
 * @Description:
 * @Author: Hongzf
 * @Date: 2022-11-21 18:51:07
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-29 16:22:02
 */
// import { ActionTree, ActionContext } from 'vuex'

// 定义数据类型
export interface CountState {
  count: number
}
// 定义state
const state: CountState = {
  count: 0
}

// 定义mutations：同步修改数据， mutation内部的函数会把state作为参数，
const mutations = {
  // 修改侧边栏的伸缩状态
  add(state: CountState, value: boolean) {
    // 我们直接操作state.count就可以完成数据的修改。
    state.count += 1
  }
}
const actions = {
  // TODO:ts
  asyncAdd({ commit }: any) {
    setTimeout(() => {
      commit('add') //可以调⽤commit来执⾏mutations去更新数据。
    }, 1000)
  }
}
const getters = {
  double(state: CountState) {
    return 2 * state.count
  }
}
export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
}
