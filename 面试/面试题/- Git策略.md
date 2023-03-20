# Git 

-   Git三大特色: 分支, 暂存区, 工作流,支持多人同时协作开发

## Git 策略
1. Git flow

-   master 每合并一次,都会打一个 tag
    -   Hotfix
-   Develop
    -   Feature
    -   Release

2. GitHub flow

-   master 权限保护,  需要代码 review
    -   feature
    -   bug

3. GitLab flow

-   在 Github flow的基础上添加了不同环境的概念
-   
-   production
-   pre-production
-   master