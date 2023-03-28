# Git

-   Git 三大特色: 分支, 暂存区, 工作流,支持多人同时协作开发

## Git 策略

1. Git flow

-   master 每合并一次,都会打一个 tag
    -   Hotfix
-   Dev
    -   Feature
    -   Release

2. GitHub flow

-   master 权限保护, 需要代码 review
    -   feature
    -   bug

3. GitLab flow

-   在 Github flow 的基础上添加了不同环境的概念

-   release
-   production
-   test
-   master

## Git 命令

1. 初始化新项目

    - `git init ` 初始化仓库
    - `git status` 查看状态
    - `git add .` 添加暂存区
    - `git commit -m '描述'` 添加描述
    - `git remote add origin 仓库地址` 添加远程仓库
    - `git push -u origin master` 推送远程仓库

2. 已有项目

    - `git clone 项目地址`
    - `git checkout -b newbranch` 切换新分支
    - ... 工作区 -> 暂存区 -> 本地仓库

    - git merge `分支main`
    - git rebase `变基 `

    - git push 推送到远程仓库

3. 版本回退

    - git log : 查看提交记录
    - git reset --hard : 版本回退

    - 留记录:
        - `git revert head`
    - `git checkout`
