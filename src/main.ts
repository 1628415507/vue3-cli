/*
 * @Author: Hongzf
 * @Date: 2022-11-17 16:00:08
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-21 10:24:31
 * @Description:
 */
import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/index'
createApp(App).use(router).use(store).mount('#app')
