## Browser files/folders
```
cd ~
cd /mnt/
ls

```
## check mount dir
```
mount
```

## symlink Windows dir with linux dir
```
sudo ln -s /mnt/c/Projects/PHP /var/www/html/myphp
```

## Open windows explorer and enter \\wsl$

## Allow apache2 and mysql to start without a sudo password in /etc/sudoers
```
sudo visudo
```
```
%sudo   ALL=(ALL) NOPASSWD: /usr/sbin/service apache2 *
%sudo   ALL=(ALL) NOPASSWD: /usr/sbin/service mysql *
```