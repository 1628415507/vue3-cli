<!--
 * @Author: Hongzf
 * @Date: 2022-11-21 09:54:25
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-22 18:25:47
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
