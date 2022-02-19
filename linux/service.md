## create service
```
vi /etc/systemd/system/service_name.service
```

```
[Unit]
Description=Ung dung ASP.NET MVC BLOG

[Service]
WorkingDirectory=/home/userasp/mvcblog
ExecStart=/usr/bin/dotnet /home/userasp/mvcblog/mvcblog.dll
Restart=always
# restart crashed application after 10s
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=asp-net-app
User=userasp
Environment=ASPNETCORE_ENVIRONMENT=Production

[Install]
WantedBy=multi-user.target
```

## get service path
```
which service_name
```

## autorun service
```
systemctl enable service_name
```

## start service
```
systemctl start service_name
```

## get service status
```
systemctl status service_name
```

## update service
```
systemctl daemon-reload
systemctl restart service_name
```