<!--
 * @Description: 登录页
 * @Author: Hongzf
 * @Date: 2022-11-25 09:22:30
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-25 16:17:26
-->
<template>
  <div class="login-wrap">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="rules"
      label-width="120px"
      class="loginForm"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model="loginForm.account" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(loginFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { asyncRoutes } from '@/router'
// 表单
const loginFormRef = ref<FormInstance>()
const router = useRouter() // useRoute相当于以前的this.$route
const store = useStore()

// 定义表单数据
const loginForm = reactive({
  account: 'admin', //账号
  password: '123456' //密码
})
// 定义表单验证规则
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入'))
  } else {
    callback()
  }
}
const rules = reactive({
  account: [{ validator: validatePass, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }]
})
// 提交表单
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      // 获取和保存菜单数据 // TODO:页面刷新就没了
      console.log('页面跳转失败')
      store.commit('SET_MENU', asyncRoutes)
      // 跳转页面
      router.push('./home').catch((err) => {})
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
.login-wrap {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: $themeColor;
}
</style>
