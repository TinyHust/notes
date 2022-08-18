## Link remote repo with local repo with specific account

### init

```bash
git init
```

### edit .git/config

```
[user]
  name = mediumhust
  email = medium.hust.lee@gmail.com
[core]
  repositoryformatversion = 0
  filemode = true
  bare = false
  logallrefupdates = true
  sshCommand = "ssh -i ~/.ssh/medium/id_rsa"
```

### add ssh private keys to your agent

```bash
ssh-add ~/.ssh/medium/id_rsa
```

### create branch, commit and push

```bash
git remote add origin https://github.com/mediumhust/nest-example.git
git checkout -b main
git add .
git commit -m "first commit"
git push -u origin main
```
