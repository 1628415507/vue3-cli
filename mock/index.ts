/*
 * @Description: 模拟数据接口
 * @Author: Hongzf
 * @Date: 2022-12-01 10:20:10
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-12-01 18:06:32
 */
// import Mock from 'mockjs'
// import menus from './menus.json'
// const baseUrl='http://localhost:8088'
// // Mock.mock('http://121.31.30:aa/get', 'get', { 'array|10': [{ 'name': '@cname', 'date': '@datetime' }] }
// // )// 注意大小写
// // 注意第一个参数是地址，第二个参数是方法，第三个参数传值
// // 后面Mock.mock是mock假数据，在官网就可以查看到，注意格式不要出错，包括空格，不然就会报错
// //引入 mock.js，相当于 src=mock.js
// // const Mock = require('mockjs');
// Mock.mock(new RegExp(baseUrl + '/getResource'), (options) => {
//   return Mock.mock(menus)
// })
// //创建模拟数据
// // const data = Mock.mock({
// //     // 属性list 的值是一个数组，其中含有1 到 10 个元素
// //     'list|1-10': [{
// //         // 属性 id 是一个自增数，起始值为1，每次增加 1
// //         'id|+1': 1
// //     }]
// // });

// 输出结果
// console.log(data);
// // 转换 JSON 格式
// console.log(JSON.stringify(data, null, 4));
export default [
  {
    url: '/mock/api/getAppInfo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        title: 'mock请求测试'
      }
    }
  }
]
