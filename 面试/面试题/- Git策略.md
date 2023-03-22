# Git

-   Git 三大特色: 分支, 暂存区, 工作流,支持多人同时协作开发

## Git 策略

1. Git flow

-   master 每合并一次,都会打一个 tag
    -   Hotfix
-   Develop
    -   Feature
    -   Release

2. GitHub flow

-   master 权限保护, 需要代码 review
    -   feature
    -   bug

3. GitLab flow

-   在 Github flow 的基础上添加了不同环境的概念
-
-   production
-   pre-production
-   master

## 常用命令

-   git clone `代码仓库地址`
-   git pull 录取最新
-   git merge `branch`

-   git status
-   git add .
-   git commit -m "描述"
-   git push

-   git head
-   git revert 版本 : 不会修改原本的提交记录
-   git reset --hard

-   最快捷的方式就是 VScode 的 git 源码管理
