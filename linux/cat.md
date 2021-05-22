# Cat Command
[REF. https://www.tecmint.com/13-basic-cat-command-examples-in-linux/](https://www.tecmint.com/13-basic-cat-command-examples-in-linux/)

## create file kind-3nodes.yaml
```
cat << EOF > kind-3nodes.yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
  - role: worker
  - role: worker
EOF
```

## Display Contents of File
```
cat /etc/passwd
```

## View Contents of Multiple Files in terminal
```
cat test test1
```

## Create a File with Cat Command
```
cat >test2
```
> Awaits input from user, type desired text and press CTRL+D

## Display Line Numbers in File
```
cat -n song.txt
```

## Display Multiple Files at Once
```
cat test; cat test1; cat test2
```

## Use Standard Output with Redirection Operator
```
cat test > test1
```

## Appending Standard Output with Redirection Operator
```
cat test >> test1
```