## updating image used by a deployment
1. the deployment must be using the 'latest' tag in the pod spec section
2. make an update to your code
3. build the image
4. push the image ti the docker hub
5. run the command
```
kubectl rollout restart deployment [depl_name]
```