<!--
 * @Description: 登录页
 * @Author: Hongzf
 * @Date: 2022-11-25 09:22:30
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-25 11:37:07
-->

<template>
  <div>登录</div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'
// import { useRoute } from 'vue-router'
import { asyncRoutes } from '@/router'
// console.log('【 routes 】-18', routes)
// const route = useRoute()
const store = useStore()
// const menu = [
//   { title: '菜单1', children: [{ title: '菜单1-1', children: [{ title: '菜单1-1-1' }] }] },
//   { title: '菜单2', children: [{ title: '菜单2-1' }] }
// ]
function setMenu() {
  store.commit('SET_MENU', asyncRoutes)
}
onMounted(() => {
  setMenu()
})
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
// let a = 0
// console.log('【 a 】-25', a)
</script>

<style scoped></style>
