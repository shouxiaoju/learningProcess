# git 学习

1. 设置用户名/邮箱
   - git config --global user.name "Your name"
   - git config --global user.email "Your email"
2. 查看 git 版本
   - git -v
3. 初始化项目
   - git init 或许使用 git init "your repository name"
4. git clone 克隆项目
   - git clone 命令将使用现有的存储库进行复制。git init 和 git clone 之间有一个主要区别。在你需要在现有的存储库上进行复制时，使用 git clone 后，git clone 命令首先在内部使用 git init 命令，然后检出所有内容
5. git add 添加暂存区
   - git add . 或者 git add your_file_name
6. git commit 添加到本地存储库
   - git commit -m 'your useful commit message'
7. git pull 拉取最新内容并更新本地存储库
   - git pull 或 git pull origin feature_branch
8. git push 提交代码
   - git push 或者 git push origin feature_branch
9. git branch 分支管理
   - git branch 查看所有分支
   - git branch branch_name 新建并切换到分支
   - git branch -d branch_name 删除分支
10. git checkout 切换分支
    - git checkout
11. git remote 本地仓库连接到远程
    - git remote add url 通过 git remote add 来添加当前本地仓库的远程仓库， 有了这个动作本地仓库（repository）就知道了当遇到 git push 的时候应该往哪里提交代码 git push 后不加参数的时候，默认就是 git push origin 当前的分支名，比如对本地的 master 分支执行 git push，其实就是 git push origin master，当然，如果远程仓库没有 master 这个分支的话，肯定会报错。
12. git merge 合并分支
    - git merge branch_name 会将 branch_name 合并到当前的分支中
13. git fetch
    - 这将更新 git remote 中所有的远程仓库(repository) 所包含分支的最新 commit-id, 将其记录到.git/FETCH_HEAD 文件中 此命令会下载有关提交、引用等的所有信息，因此你可以在将这些更改应用于本地存储库之前对其进行检查。

# git pull 的运行过程

## git pull

首先，基于本地的 FETCH_HEAD 记录，比对本地的 FETCH_HEAD 记录与远程仓库的版本号，然后 git fetch 获得当前指向的远程分支的后续版本的数据，然后再利用 git merge 将其与本地的当前分支合并。git pull 后不加参数的时候，跟 git push 一样，默认就是 git pull origin 当前分支名，当然远程仓库没有跟本地当前分支名一样的分支的话，肯定会报错。本地 master 分支执行 git pull 的时候，其实就是 git pull origin master。

## 拆解 git pull 操作

git pull 操作其实是 git fetch 与 git merge 两个命令的集合。
git pull 等效于先执行 git fetch origin 当前分支名, 再执行 git merge FETCH_HEAD.
通过上述分析，可以知道，如果要合并代码就并不一定要用 git merge 命令了，也可以用 git pull 命名，比如要把远程 origin 仓库的 xx 分支合并到本地的 yy 分支，可以有如下两种做法。

1. 传统标准的做法：
   - git fetch origin 目标分支名 // fetch 到远程仓库目标分支的最新 commit 记录到 ./git/FETCH_HEAD 文件中
   - git checkout 要被合并的分支名 // 切换到要合并的分支
   - git merge FETCH_HEAD // 将目标分支最新的 commit 记录合并到当前分支
2. 直接使用 pull 命令，将远程仓库的目标分支合并到本地的分支：
   - git checkout yy
   - git pull origin xx

# 撤销 commit git reset --soft HEAD^
