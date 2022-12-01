/*
 * @Description:
 * @Author: Hongzf
 * @Date: 2022-11-21 18:11:28
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-12-01 17:08:24
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// mock
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    // 插件
    plugins: [
      vue(),
      // mock 数据的 dev环境
      viteMockServe({
        // supportTs: true, // 是否开启支持ts
        mockPath: 'mock',// 设置mockPath为根目录下的mock目录
        localEnabled: command === 'serve',// 设置是否监视mockPath对应的文件夹内文件中的更改
        logger: true //是否在控制台显示请求日志
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')//resolve('./src')
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
  }
})
