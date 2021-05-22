# Enable GUI (graphical environment) for Ubuntu-20.04 LTS in WSL
REF: 
[https://dev.to/aitorsol/wsl2-windows-linux-subsystem-a-guide-to-install-a-local-web-server-ubuntu-20-04-apache-php8-y-mysql8-3bbk](https://dev.to/aitorsol/wsl2-windows-linux-subsystem-a-guide-to-install-a-local-web-server-ubuntu-20-04-apache-php8-y-mysql8-3bbk)  

## execute ONE BY ONE
```
sudo apt update && sudo apt -y upgrade
sudo apt-get purge xrdp
sudo apt install -y xrdp
sudo apt install -y xfce
sudo apt install -y xfce4-goodies
sudo cp /etc/xrdp/xrdp.ini /etc/xrdp/xrdp.ini.bak
sudo sed -i "s/3389/3390/g" /etc/xrdp/xrdp.ini
sudo sed -i "s/max_bpp=32/#max_bpp=32\nmax_bpp=128/g" /etc/xrdp/xrdp.ini
sudo sed -i "s/xserverbpp=24/#xserverbpp=24\nxserverbpp=128/g" /etc/xrdp/xrdp.ini
echo xfce4-session > ~/.xsession
```

## Then edit the following file
```
sudo nano /etc/xrdp/startwm.sh
```

## Search and find the following lines and put the symbol # at the beginning of the lines:
```
# test -x /etc/X11/Xsession && exec /etc/X11/Xsession
# exec /bin/sh /etc/X11/Xsession
```

## Add these lines to the end of the file:
```
# xfce
startxfce
```

## Then Ctrl + O and Ctrl + X to save the changes and exit.

## Then write, in the terminal, to initialize the following:
```
sudo /etc/init.d/xrdp start
```

## Remote Desktop Connection localhost: 3390

## If you want to automate the remote desktop service startup at the same time when the system starts.
```
sudo nano ~/.bashrc
```
## Add at the end the line:
```
sudo /etc/init.d/xrdp start
```
## Then Ctrl + O and Ctrl + X to save the changes and exit.