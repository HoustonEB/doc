# branch 的使用
---
#### 基本命令
``` bash
// 查看分支
git branch
// 创建分支
git branch branch-name
// 切换分支
git checkout branch-name
// 创建并切换分支
git checkout -b branch-name

// 将develop分支合并到master分支上
git checkout master
git merge develop
```
#### 使用场景
---
1. 存在新需求的开发代码,但是不准备release
  - 新建分支 ***develop*** 存放新需求的代码
  - 用 ***release*** 分支存放将要发版的代码
  - 用 ***master*** 分支push