/*
 * @Description: 时间相关的方法
 * @Author: Hongzf
 * @Date: 2022-12-02 18:11:46
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-12-02 18:42:18
 */

// 格林威治时间转正常格式并兼容ios:https://blog.51cto.com/u_15600733/5237392
export function timeChange(time: string) {
  const date = time.substring(0, 10) // 年月日
  console.log('【 date 】-12', date)
  const hours = time.substring(11, 13)
  const minutes = time.substring(14, 16)
  const seconds = time.substring(17, 19)
  let timeStr = date + ' ' + hours + ':' + minutes + ':' + seconds
  timeStr = timeStr.replace(/-/g, '/')
  let timeFlag: Date = new Date(timeStr)
  timeFlag = new Date(timeFlag.getTime() + 8 * 3600 * 1000)
  // 获取时间
  const year = timeFlag.getFullYear() // 年
  const m = timeFlag.getMonth() // 月
  const month = m + 1 < 10 ? '0' + (m + 1) : m + 1
  const d = timeFlag.getDate() // 日
  const day = d < 10 ? '0' + d : d
  const hour = timeFlag.getHours()
  const min = timeFlag.getMinutes()
  const s = timeFlag.getSeconds()
  const second = s < 10 ? '0' + s : s
  const res = `${year}/${month}/${day} ${hour}:${min}:${second}`
  console.log('【 res 】-32', res)
  return res
}
