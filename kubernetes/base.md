## Get info:
```
kubectl cluster-info
```

## list all contexts
```
kubectl config get-contexts
```

## switch context( cluster )
```
kubectl config use-context CONTEXT_NAME
```

## Check how many nodes it created
```
kubectl get nodes
```
## or
```
kubectl get nodes -o wide
```

## Check the services for the whole cluster
```
kubectl get all --all-namespaces
```
## or 
```
kubectl get all -A
```