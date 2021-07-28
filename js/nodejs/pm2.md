## start 3 cluster
```
pm2 start index.js -i 3
```

## start clusters base on cpu processor
```
pm2 start index.js -i -1
```

## list
```
pm2 list
```

## stop
```
pm2 stop [cluster_name]
```

## delete
```
pm2 delete [cluster_name]
```

## log
```
pm2 logs
```

## reload ( after changed code )
```
pm2 reload [cluster_name]
```

## monitor
```
pm2 monit
```