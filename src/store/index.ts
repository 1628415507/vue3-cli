/*
 * @Description: vuex相关配置
 * @Author: Hongzf
 * @Date: 2022-11-21 18:51:07
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-29 16:26:00
 */
import { createStore, Store } from 'vuex'
// 引入模块
import app from '@/store/modules/app' // 引入app文件模块
import count from '@/store/modules/count' // 引入count文件模块

// 创建一个store实例
export const store: Store<any> = createStore({
  modules: {
    app,
    count
  }
})

export function useStore() {
  return store
}
