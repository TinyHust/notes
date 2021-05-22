## REFs: 
[https://mohitgoyal.co/2021/03/19/setup-local-kubernetes-cluster-with-docker-wsl2-and-kind/](https://mohitgoyal.co/2021/03/19/setup-local-kubernetes-cluster-with-docker-wsl2-and-kind/)  
[https://mohitgoyal.co/2021/03/19/setup-local-kubernetes-cluster-with-docker-wsl2-and-kind-part-2/](https://mohitgoyal.co/2021/03/19/setup-local-kubernetes-cluster-with-docker-wsl2-and-kind-part-2/)  
[https://kubernetes.io/blog/2020/05/21/wsl-docker-kubernetes-on-the-windows-desktop/](https://kubernetes.io/blog/2020/05/21/wsl-docker-kubernetes-on-the-windows-desktop/)

## Install Linux Distro
```
sudo visudo
```
### Change the %sudo group to be password-less
```
%sudo   ALL=(ALL:ALL) NOPASSWD: ALL
```

## Update the repositories and list of the packages available
```
sudo apt update
```
## Update the system based on the packages installed > the "-y" will approve the change automatically
```
sudo apt upgrade -y
```

---

## Setup KinD on Linux Distro

### Download the latest version of KinD
```
curl -Lo ./kind https://github.com/kubernetes-sigs/kind/releases/download/v0.10.0/kind-linux-amd64
```
### Make the binary executable
```
chmod +x ./kind
```
### Move the binary to your executable path
```
sudo mv ./kind /usr/local/bin/
```

## Usage
### Create the cluster and give it a name (optional)
```
kind create cluster --name wslkind
```

## Delete the existing cluster
```
kind delete cluster --name wslkind
```

## Create a new cluster with the config file
```
kind create cluster --name wslkindmultinodes --config ./kind/kind-3nodes.yaml
```

---

## Ingress NGINX

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml
```
### Wait until is ready to process requests running:
```
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s
```
### Test:
```
kubectl apply -f https://kind.sigs.k8s.io/examples/ingress/usage.yaml
```

---

## Dashboard
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-rc6/aio/deploy/recommended.yaml
```
## Start a kubectl proxy
```
kubectl proxy
```
### Enter the URL on your browser: [http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/)  
### Create a new ServiceAccount
```
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
EOF
```
### Create a ClusterRoleBinding for the ServiceAccount
```
cat <<EOF | kubectl apply -f -
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
EOF
```
### Get the Token for the ServiceAccount
```
kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk '{print $1}')
```
### Copy the token and copy it into the Dashboard login and press "Sign in"

--- 

## Metrics server
### REFs:
[https://github.com/kubernetes-sigs/kind/issues/398](https://github.com/kubernetes-sigs/kind/issues/398)  
[https://github.com/kubernetes-sigs/metrics-server](https://github.com/kubernetes-sigs/metrics-server)  
### download: https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
### add flags to the metric-deployment
```
    args:
        - --kubelet-insecure-tls
        - --kubelet-preferred-address-types=InternalIP
```
### run
```
kubectl apply -f ./components.yaml
```