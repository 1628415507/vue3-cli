<!--
 * @Author: Hongzf
 * @Date: 2022-11-21 09:54:25
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-21 11:46:09
 * @Description:
-->
<template>
  <div>http</div>
</template>
<script setup lang="ts">
import Http from '@/utils/http'
const getData = () => {
  // const store = useStore()
  Http.get('url').then((res: Object) => {
    console.log(res)
  })
}
</script>

<style scoped></style>
