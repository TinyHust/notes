## multiple github accounts with ssh keys

### generate ssh key paris
```
ssh-keygen -t rsa -b 4096 -C "medium.hust.lee@gmail.com"
```

### edit/create ssh config file (~/.ssh/config)
```
#toanld3 account
Host github.com-toanld3
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa
	
#mediumhust account
Host github.com-mediumhust
	HostName github.com
	User git
	IdentityFile ~/.ssh/medium/id_rsa
```

### add ssh private keys to your agent
```
eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/medium/id_rsa
```

### test connection
```
ssh -T git@github.com-toanld3
ssh -T git@github.com-mediumhust
```
If everything is OK, will see these messages:
```
Hi mediumhust! You've successfully authenticated, but GitHub does not provide shell access.
```

### config repo
```
git config user.email "medium.hust.lee@gmail.com"
git config user.name  "mediumhust"
```

### edit repo .git/config
```
[core]
	#other config
	sshCommand = "ssh -i ~/.ssh/medium/id_rsa"
```
