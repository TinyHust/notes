### ls: cannot access '/mnt/c': Input/output error

## Referrer link:  
[https://github.com/microsoft/WSL/issues/4377](https://github.com/microsoft/WSL/issues/4377)

> That error occurs if the hidden wslhost.exe process is died/killed. Just use wsl.exe --shutdown and restart it.