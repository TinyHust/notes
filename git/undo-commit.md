# undo last commit
```
git reset HEAD~ 
git add .  
git commit -c ORIG_HEAD -m"msg"
```

notes:
- commit with -c ORIG_HEAD will open an editor, which initially contains the log message from the old commit and allows to edit it.  
If do not need to edit the message, could use the -C option.
- HEAD~ is the same as HEAD~1
- To remove (not revert) a commit that has been pushed to the server, rewriting history with `git push origin master --force` is necessary.