# relocate docker-desktop-data

## Referrer link:  
[https://stackoverflow.com/questions/62441307/how-can-i-change-the-location-of-docker-images-when-using-docker-desktop-on-wsl2](https://stackoverflow.com/questions/62441307/how-can-i-change-the-location-of-docker-images-when-using-docker-desktop-on-wsl2)

The WSL 2 docker-desktop-data vm disk image would normally reside in: 
```
%USERPROFILE%\AppData\Local\Docker\wsl\data\ext4.vhdx
```

```
wsl --list -v
```

## Export docker-desktop-data into a file
```
wsl --export docker-desktop-data "D:\Docker\wsl\data\docker-desktop-data.tar"
```

## Unregister docker-desktop-data from wsl
```
wsl --unregister docker-desktop-data
```

## Import the docker-desktop-data back to wsl
```
wsl --import docker-desktop-data "D:\Docker\wsl\data" "D:\Docker\wsl\data\docker-desktop-data.tar" --version 2
```