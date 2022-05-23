## install squid proxy on centos

```
yum install squid -y
vi /etc/squid/squid.conf

#insert after line: acl CONNECT method CONNECT
# Allow all access
acl mynetwork src 0.0.0.0/0
http_access allow mynetwork
http_access deny all

# start squid
service squid start
systemctl enable --now squid
```