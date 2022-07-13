## link local repo without history with remote repo

```bash
git init
git remote add origin https://github.com/mediumhust/nest-example.git
git checkout -b main
git add .
git commit -m"local change"
git push origin main --allow-unrelated-histories

#resolve conflict
git add .
git commit -m"resolve conflict"
git push origin main
```