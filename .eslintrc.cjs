/*
 * @Author: Hongzf
 * @Date: 2022-11-17 16:36:23
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-11-17 17:21:48
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
        'eslint:recommended',
        // "airbnb-base"
        'plugin:vue/vue3-essential'
        // "plugin:@typescript-eslint/recommended"
    ],
    overrides: [],
    // "parser": "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 'latest',
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
        // 'vue/html-closing-bracket-newline': 'off', // 不强制换行
        // 'vue/singleline-html-element-content-newline': 'off', // 不强制换行
        // 'vue/max-attributes-per-line': ['error', {
        //   singleline: { max: 5 },
        //   multiline: { max: 5 }
        // }] // vue template模板元素第一行最多5个属性
        // 其它的规则可以去eslint查看，根据自己需要进行添加
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};
