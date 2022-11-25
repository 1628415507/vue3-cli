/*
 * @Author: Hongzf
 * @Date: 2022-11-17 16:00:08
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-24 10:37:01
 * @Description:
 */
import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/index'
// 引入UI组件库、图标
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus).use(router).use(store).mount('#app')
// 全局注册图标组件
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
