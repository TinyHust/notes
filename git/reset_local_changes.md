## reset local changes

## get staged files

```
git diff --name-only --cached
```

### This will unstage all files you might have staged with git add:

```
git reset
```

### This will revert all local uncommitted changes (should be executed in repo root):

```
git checkout .
```

### You can also revert uncommitted changes only to particular file or directory:

```
git checkout [some_dir|file.txt]
```

### revert all uncommitted changes

```
git reset --hard HEAD
```
