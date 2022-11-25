<!--
 * @Description: 侧边栏/菜单栏
 * @Author: Hongzf
 * @Date: 2022-11-23 17:57:04
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-24 18:24:45
-->

<template>
  <div class="aside-wrap">
    <el-scrollbar class="scrollbar-wrap">
      <!-- :default-openeds="['1', '3']" -->
      <el-menu class="menu-wrap" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <!-- 菜单项 -->
        <MenuItem
          v-for="(menuItem, index) in menuList"
          :key="index"
          :item="menuItem"
          :isCollapse="isCollapse"
          :isFirstLevel="true"
        >
        </MenuItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, defineProps } from 'vue'
import MenuItem from './MenuItem.vue'
import { useStore } from 'vuex'

const store = useStore()
const sidebar = computed(() => {
  return store.state.app.sidebar
})
const isCollapse = computed(() => {
  return sidebar.value.isCollapse
})
// 获取菜单数据
const menuList = computed(() => {
  return store.state.app.menu
})
console.log('【 menuList 】-41', menuList)
// reactive([
//   {
//     title: '菜单1',
//     index: '1',
//     children: [{ title: '菜单1-1', index: '1-1', children: [{ title: '菜单1-1-1' }] }]
//   },
//   { title: '菜单2', index: '2', children: [{ title: '菜单2-1' }] }
// ])
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.aside-wrap {
  background: var(--el-color-primary-light-8);
  min-height: 98vh; // calc(100vh - 20px);;
  .scrollbar-wrap {
    overflow-x: hidden !important;

    // 菜单展开时的宽度
    .menu-wrap:not(.el-menu--collapse) {
      width: 200px;
      height: 100%;
    }
  }
}

// .layout-container-demo .el-menu {
//   border-right: none;
// }
</style>
