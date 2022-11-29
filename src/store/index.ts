/*
 * @Description: vuex相关配置
 * @Author: Hongzf
 * @Date: 2022-11-21 18:51:07
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-29 18:09:20
 */
import { createStore, Store } from 'vuex'
// 引入模块
import { store as app, AppState } from '@/store/modules/app' // 引入app文件模块
import { store as count, CountState } from '@/store/modules/count' // 引入count文件模块

// 定义数据类型
export interface RootState {
  app: AppState
  count: CountState
}
// 创建一个store实例TODO:TS
export const store: Store<RootState> = createStore({
  modules: {
    app,
    count
  }
})

export function useStore() {
  return store
}
