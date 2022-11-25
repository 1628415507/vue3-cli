<!--
 * @Description: 导航栏
 * @Author: Hongzf
 * @Date: 2022-11-23 18:06:18
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-24 16:42:56
-->

<template>
  <div class="header-wrap">
    <!-- 控制侧边栏伸缩 -->
    <div class="aside-control">
      <el-icon v-if="isCollapse" @click="handleSidebar"><Expand /></el-icon>
      <el-icon v-else @click="handleSidebar"><Fold /></el-icon>
    </div>
    <!-- 工具栏 -->
    <div class="toolbar">
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: 1px"><setting /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>Tom</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Setting, Expand, Fold } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
const store = useStore()
// 操作侧边栏
const sidebar = computed(() => {
  return store.state.app.sidebar
})
const isCollapse = computed(() => {
  return sidebar.value.isCollapse
})
function handleSidebar() {
  store.commit('SET_COLLAPSE', !isCollapse.value)
}
</script>

<style lang="scss" scoped>
.header-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  .aside-control {
    width: 20px;
    cursor: pointer;
    .el-icon {
      font-size: 17px;
      margin-right: 8px;
      margin-top: 1pxs;
    }
  }
  .toolbar {
    width: 250px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    right: 20px;
  }
}
</style>
