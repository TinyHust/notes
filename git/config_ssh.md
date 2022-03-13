## config ssh, define which specific key should be used for certain repository

Solution 1: Edit /.git/config

```
[core]
    sshCommand = ssh -i ~/.ssh/id_rsa_corp
```

Solution 2: with cmd
```
git config core.sshCommand 'ssh -i ~/.ssh/id_rsa_corp'
```