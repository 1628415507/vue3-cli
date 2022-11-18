/*
 * @Author: Hongzf
 * @Date: 2022-11-18 15:30:19
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-18 18:07:25
 * @Description: 参考地址 https://www.jianshu.com/p/7be4fcd4f78d
 */
//从.git/COMMIT_EDITMSG文件中读取commit的内容
const msg = require('fs').readFileSync('.git/COMMIT_EDITMSG', 'utf-8').trim()
const chalk = require('chalk') //安装npm install chalk
chalk.level = 1
// chalk是一个颜色的插件。可以通过chalk.颜色(‘...’)来改变颜色
// 校验格式
const commitRE =
  /^(revert: )?(create|feat|fix|conflict|style|save|stash|delete|tool|docs|dx|refactor|revert|perf|test|workflow|build|ci|chore|types|hotfix|update|wip|release)(\(.+\))?: .{1,50}/
console.log('1.git commit开始校验')
if (!commitRE.test(msg)) {
  console.log('2.git commit校验中')
  console.log()
  console.log(
    `${chalk.bgRed.white(' ERROR ')} ${chalk.bold.red('无效的commit提交格式')}\n\n` +
      chalk.red(
        '请遵循' +
          chalk.underline.red('type：message') +
          '的格式提交. 例如: ' +
          chalk.underline.red('git commit -m "feat：描述文字"\n')
      )
  )
  console.table([
    {
      [chalk.cyan('type')]: 'create',
      [chalk.cyan('注释/message')]: '创建 XXX项目'
    },
    {
      [chalk.cyan('type')]: 'feat',
      [chalk.cyan('注释/message')]: '新增特性/完成XXXX'
    },
    {
      [chalk.cyan('type')]: 'fix',
      [chalk.cyan('注释/message')]: '修复XXX bug'
    },
    {
      [chalk.cyan('type')]: 'conflict',
      [chalk.cyan('注释/message')]: '解决XXX冲突'
    },
    {
      [chalk.cyan('type')]: 'style',
      [chalk.cyan('注释/message')]: '样式修改'
    },
    {
      [chalk.cyan('type')]: 'delete',
      [chalk.cyan('注释/message')]: '删除文件'
    },
    {
      [chalk.cyan('type')]: 'tool',
      [chalk.cyan('注释/message')]: '增加XXX开发工具'
    },
    {
      [chalk.cyan('type')]: 'docs',
      [chalk.cyan('注释/message')]: '撰写文档'
    }
    // {
    //   [chalk.cyan('type')]: 'perf',
    //   [chalk.cyan('注释/message')]: '性能优化',
    // },
    // {
    //   [chalk.cyan('type')]: 'chore',
    //   [chalk.cyan('注释/message')]: '改变构建流程,chore：pull origin [分支名称]',
    // },
    // {
    //   [chalk.cyan('type')]: 'refactor',
    //   [chalk.cyan('注释/message')]: '重构XXX内容',
    // },
    // {
    //   [chalk.cyan('type')]: 'hotfix',
    //   [chalk.cyan('注释/message')]: '紧急修复XXXX',
    // },
    // {
    //   [chalk.cyan('type')]: 'revert',
    //   [chalk.cyan('注释/message')]: '回滚XXX版本',
    // },
    // {
    //   [chalk.cyan('type')]: 'update',
    //   [chalk.cyan('注释/message')]: '更新文档',
    // },
    // {
    //   [chalk.cyan('type')]: 'build',
    //   [chalk.cyan('注释/message')]: '打包XXXX项目/影响构建系统或外部依赖项的更改',
    // },
    // {
    //   [chalk.cyan('type')]: 'test',
    //   [chalk.cyan('注释/message')]: '测试XXXX文件',
    // }
  ])
  console.log(
    chalk.red(
      '\n提示：文字描述不超过50个字，推荐以动词开头：创建、修复、完成、增加、删除等' +
        '\n\n更多内容详见 .husky/verifyCommit.js文件 \n'
    )
  )
  process.exit(1)
  // const mergeRe = /^(Merge pull request|Merge branch)/
  // if (!mergeRe.test(msg)) {
  //   console.log('3.git commit信息校验不通过')
  //   console.error(
  //     `git commit的信息格式不对, 需要使⽤ title(scope): desc的格式，详见.husky/verifyCommit.js`
  //   )
  //   process.exit(1) //中断执行
  // }
} else {
  console.log('git commit 校验通过')
}
