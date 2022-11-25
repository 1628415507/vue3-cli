/*
 * @Description:
 * @Author: Hongzf
 * @Date: 2022-11-21 18:11:28
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-25 15:24:25
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  // 配置公共样式文件
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/index.scss";'
      }
    }
  },
  base: './', // 打包路径
  server: {
    port: 8888, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  }
})
