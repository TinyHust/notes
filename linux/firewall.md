## get status
```
systemctl status firewalld
```

## get list service
```
firewall-cmd --list-services
```

## add service
```
firewall-cmd --zone=public --permanent --add-service=https
firewall-cmd --reload
```