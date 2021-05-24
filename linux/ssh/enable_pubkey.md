**REF**: [https://xuanthulab.net/tao-ssh-key-va-xac-thuc-ket-noi-ssh-bang-public-private-key.html](https://xuanthulab.net/tao-ssh-key-va-xac-thuc-ket-noi-ssh-bang-public-private-key.html)


## config Public key for ssh server
### linux
```
/etc/ssh/sshd_config 
```
### windows
```
C:\ProgramData\sshd_config
```
```
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
```

## permission
```
/home/abc                               700
/home/abc/.ssh                          700
/home/abc/.ssh/authorized_keys          600
```
```
chmod 600 /home/abc/.ssh/authorized_keys
```

## generate ssh key
```
ssh-keygen -t rsa
cp id_rsa.pub /root/.ssh/authorized_keys
```
### get private key and save in local
```
scp user@ip:/path_to_id_rsa local_path
```

## public key location
### linux
```
user root: /root/.ssh/authorized_keys
user abc: /home/abc/.ssh/authorized_keys
```
### windows
%homepath%\.ssh\
%homepath% = C:\Users\username\

## config private key for ssh client
### linux
```
~/.ssh/config
/home/abc/.ssh/config
```
### windows
```
C:\Users\abc\.ssh\config
```

```
Host 192.168.1.52 # or domain
    Port 22
    User username
    PreferredAuthentications publickey
    IdentityFile "C:\MySSHKey\id_rsa"
```

## generate ssh key from local and put to server
```
ssh-copy-id -i ~/.ssh/id_rsa.pub user@server
```

## login ssh with custom key name or location
```
ssh -i ~/.ssh/custom_key_name user@server
```