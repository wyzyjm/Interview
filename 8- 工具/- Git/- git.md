# Git

- 工作区 -> 暂存区 -> 本地仓库 -> 远程仓库
- .gitignore 文件
## 常用命令

1. 初始化新项目
   - `git init `                        初始化仓库
   - `git status`                       查看状态
   - `git add .`                        添加暂存区
   - `git commit -m '描述'`             添加描述
   - `git remote add origin 仓库地址`    添加远程仓库
   - `git push -u origin master`        推送远程仓库

2. 已有项目
   - git clone `项目地址`
   - git pull 拉取最新代码

   - git status 
   - git add .
   - git commit -m ""
   - git pull 拉取最新代码

   - git merge `分支main`
   - git rebase `变基 `     

   - git push 推送到远程仓库

3. 版本回退
    - git log : 查看提交记录
    - git reset --hard : 版本回退