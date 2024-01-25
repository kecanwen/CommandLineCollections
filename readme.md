<h1 align="center">从0到1实现脚手架开发</h1>

## ⌨️ 开发计划

Development Plan

- [x] 将包npm link出去
- [x] 脚手架原理
- [x] 脚手架准备阶段
- [ ] commander命令
- [ ] 脚手架命令注册和执行
- [ ] 脚手架命令动态加载功能架构设计
- [ ] node多进程
- [ ] 命令的准备和执行
- [ ] 脚手架项目创建功能
- [ ] 脚手架发布架构设计
- [ ] 脚手架发布功能开发
- [ ] 云构建架构设计
- [ ] 脚手架云发布

## ⌨️ 内容总结

content summary

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ant-design/ant-design)

1、npm link:

```bash
$ npm link 是一个 Node.js 提供的命令，用于在本地开发中创建全局链接（symbolic link）来测试和调试本地模块
$ 一般情况下，我们在开发一个模块时，会将其安装到项目的 node_modules 目录中，然后在代码中通过 require 或 import 来引用该模块
$ npm link 提供了一种解决方案。它允许我们在全局范围创建一个链接，将本地的模块链接到全局 node_modules 目录中，从而可以直接在项目中使用本地模块的最新版本，而无需每次重新安装
```

2、引入一些脚手架构建中必须用到的工具库:

```
- commander 可以自定义一些命令行指令，在输入自定义的命令行的时候，会去执行相应的操作
- inquirer 可以在命令行询问用户问题，并且可以记录用户回答选择的结果
- fs-extra 是fs的一个扩展，提供了非常多的便利API，并且继承了fs所有方法和为fs方法添加了promise的支持。
- chalk 可以美化终端的输出
- figlet 可以在终端输出logo
- ora 控制台的loading动画
- download-git-repo 下载远程模板
```

