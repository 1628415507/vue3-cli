/*
 * @Author: Hongzf
 * @Date: 2022-11-17 16:00:08
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-17 17:49:01
 * @Description:
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

let x: number = 1
console.log('【 x 】-10', x)
// 执行npx eslint src/main.ts检查当前页面的eslint
createApp(App).mount('#app')
