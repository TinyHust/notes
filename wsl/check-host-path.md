## check mount
```
mount
```
> result has: E:\ on /mnt/e
## create file:\k8s\shares\test.txt
```
docker run --rm -it -v /mnt/e/k8s/shares/:/shares alpine cat /shares/test.txt
```