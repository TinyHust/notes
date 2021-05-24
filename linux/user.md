# adduser
REF: [https://www.tecmint.com/add-users-in-linux/](https://www.tecmint.com/add-users-in-linux/)  

## create new user
> -d: Different Home Directory  
> -m: Default Shell
```
useradd -m -d /home/jenkins -s /bin/bash jenkins
```

## Create a User with Specific User ID
```
useradd -u 999 navin
```

## Create a User with Specific Group ID
```
useradd -u 1000 -g 500 tarunika
```

## Add a User to Multiple Groups
```
useradd -G admins,webadmin,developers tecmint
```
### check
```
id tecmint
```