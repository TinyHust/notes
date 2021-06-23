# change commit message
[REF](https://docs.github.com/en/github/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)  

## Commit has not been pushed online

Type `git commit --amend` and press Enter
```
git commit --amend
```

In your text editor, edit the commit message, and save the commit.


## Changing the message of the most recently pushed commit

- Follow the steps above to amend the commit message  
- Use the `push --force` command to force push over the old commit.
```
git push --force origin main
```

## Changing the message of older or multiple commit messages

1 - Use the `git rebase -i HEAD~n` command to display a list of the last n commits in your default text editor.
```
# Displays a list of the last 3 commits on the current branch
$ git rebase -i HEAD~3
```
example:
```
pick e499d89 Delete CNAME
pick 0c39034 Better README
pick f7fde4a Change the commit message but push the same commit.

# Rebase 9fdb3bd..f7fde4a onto 9fdb3bd
```

2 - Replace pick with reword before each commit message you want to change.
```
pick e499d89 Delete CNAME
reword 0c39034 Better README
reword f7fde4a Change the commit message but push the same commit.
```

3 - Save and close the commit list file.  
4 - In each resulting commit file, type the new commit message, save the file, and close it.
5 - When you're ready to push your changes to GitHub, use the push --force command to force push over the old commit.
```
git push --force origin example-branch
```