# Git
## 去除已经 `commit` 过的某个文件的提交
1. 回退到上一工作区
```bash
git reset HEAD^
```

2. 将不想 `commit` 的文件 `stash`
```bash
git stash -- src/xxx.js
```

3. 重新提交一次
```bash
git add .
git commit
```
