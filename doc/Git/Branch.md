# branch 的使用
---
#### 基本命令
``` bash
// 查看历史记录的版本id号
git reflog
// 回退到上一个版本
git reset --hard HEAD^ 或者 git reset HEAD~3版本数(回退到第三个版本) 
// 回退到某个版本号
git reset --hard 版本号
```
1. 使用场景
 - 现在回退到上个第二个版本
 `git reset --hard HEAD~2`
 - 现在又不想回退了,但是因为回退版本导致原来的版本号不知道所以需要查看全部版本号
 `git reflog`
 - 现在可以回退到最新的操作了
 `git reset --hard 版本号`
 -------------------------------------
``` bash
// 查看分支
git branch
// 创建分支
git branch branch-name
// 删除分支
git branch -d branch-name
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