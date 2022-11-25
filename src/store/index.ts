/*
 * @Description:
 * @Author: Hongzf
 * @Date: 2022-11-21 18:51:07
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-24 13:45:31
 */
import { createStore } from 'vuex'
// 引入app文件模块
import app from '@/store/modules/app'
console.log('【 app 】-10', app)

const defaultState = {
  count: 0
}

// Create a new store instance.
export default createStore({
  modules: {
    app
  },
  state() {
    return defaultState
  },
  // mutations：同步修改数据， mutation内部的函数会把state作为参数，
  mutations: {
    add(state: typeof defaultState) {
      // 我们直接操作state.count就可以完成数据的修改。
      state.count += 1
    }
  },
  // actions：异步修改数据
  actions: {
    // increment(context) {
    //   context.commit('increment')
    // }
    // 这个配置中所有的函数，可以通过解构获得 commit函数。
    // 内部的异步任务完成后，就随时可以调⽤commit来执⾏mutations去更新数据。
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit('add') //可以调⽤commit来执⾏mutations去更新数据。
      }, 1000)
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
