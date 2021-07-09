## check service status
```
systemctl status sshd
```

## remove openssh-sever
```
systemctl stop sshd
yum remove openssh-sever
```

## install openssh-server
### CentOS/RHEL
```
yum install openssh openssh-server openssh-clients openssl-libs -y
```
### Ubuntu
```
sudo apt-get install openssh-server openssh-client
```

## enable ssh start when boot
```
systemctl enable sshd
```

## open port 22
```
firewall-cmd --add-port=22/tcp --permanent
firewall-cmd --reload
```

## start
```
systemctl start sshd
```

## restart
```
systemctl restart sshd
```

## fake ip ( socks: localhost:19999 )
REF: [https://xuanthulab.net/mot-so-thu-thuat-su-dung-ssh.html](https://xuanthulab.net/mot-so-thu-thuat-su-dung-ssh.html)  
```
ssh -D 0.0.0.0:19999 root@myserver
```

## tunnel
### connect mysql on server via localhost
```
ssh  -L 0.0.0.0:3306:127.0.0.1:3306 user@remoteserver
```