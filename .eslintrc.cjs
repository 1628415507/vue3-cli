/*
 * @Author: Hongzf
 * @Date: 2022-11-17 16:36:23
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-21 09:58:47
 * @Description:
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // 'eslint:recommended',
    // "airbnb-base"
    'plugin:vue/vue3-essential',
    // 添加 prettier 插件,这样，我们在执行 eslint --fix 命令时，
    // ESLint 就会按照 Prettier 的配置规则来格式化代码，解决prettier/ESLint二者冲突问题。
    'plugin:prettier/recommended'
    // "plugin:@typescript-eslint/recommended"
  ],
  overrides: [],
  // "parser": "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    // 默认的eslint配置无法检测ts的语法，有些关键字会报错,解决interface关键字等识别报错的问题
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 我们主要使用以下规则配置
    // 错误急别分为三类
    // 1、off 或 0 表示关闭验证规则
    // 2、warn 或 1 表示开启警告验证规则
    // 3、error 或 2 表示开启错误验证规则，程序会报错退出
    semi: [2, 'never'], // 禁止尾部使用分号“ ; ” // "semi": ["warn", "never"],
    'no-var': 'error', // 禁止使用 var
    indent: ['error', 2], // 缩进2格
    'no-mixed-spaces-and-tabs': 'error', // 不能空格与tab混用
    quotes: [2, 'single'], // 使用单引号
    // 关闭名称校验（使用大驼峰命名方式或者用“-”连接单词）
    // 'vue/multi-word-component-names': 'off',
    // 'vue/html-closing-bracket-newline': 'off', // 不强制换行
    // 'vue/singleline-html-element-content-newline': 'off', // 不强制换行
    // vue template模板元素第一行最多5个属性
    // 'vue/max-attributes-per-line': ['error', {
    //   singleline: { max: 5 },
    //   multiline: { max: 5 }
    // }]
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    // 其它的规则可以去eslint查看，根据自己需要进行添加
  }
}
