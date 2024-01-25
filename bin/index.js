#! /usr/bin/env node

// 文件以#！开头代表这个文件可以被当做一个可执行文件来执行 可以当做脚本来执行
// /usr/bin/env node代表这个文件用node执行，node基于用户安装根目录下的环境变量中查找
const { Command } = require('commander');
const program = new Command();

program
  .name('kk cli')
  .description('这里是描述文案')
  .version('1.0.0');

program.command('create <name>')
  .description('创建一个新工程')
  .action((name) => {
    console.log('[ 工程名称 ] >', name)// 执行 kkcli create kkfirstCli 控制台打印======>  [ 工程名称 ] >', kkfirstCli
  });

program.parse(process.argv);
