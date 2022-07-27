## install kubernetes
```bash
sudo apt update
sudo apt -y full-upgrade

sudo apt -y install curl apt-transport-https
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list

sudo apt update
sudo apt -y install vim git curl wget kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```

### Confirm installation by checking the version of kubectl
```bash
kubectl version --client && kubeadm version
```

## install VirtualBox
edit
```
sudo vi /etc/vbox/networks.conf
```
add
```
* 0.0.0.0/0 ::/0
```

## install vagrant
```bash
sudo apt-get install vagrant
```

## create master
```bash
chmode +x install-docker-kube.sh
cd ./master
vagrant up
```
### access master
```bash
ssh root@172.16.10.100
```
```bash
rm /etc/containerd/config.toml
systemctl restart containerd
kubeadm init --apiserver-advertise-address=172.16.10.100 --pod-network-cidr=192.168.0.0/16

mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

kubectl apply -f https://docs.projectcalico.org/v3.19/manifests/calico.yaml
```

## connect host kubectl to cluster
```bash
kubectl config view
scp root@172.16.10.100:/etc/kubernetes/admin.conf ~/.kube/config-mycluster
export KUBECONFIG=/home/toanld/.kube/config-mycluster

# kubectl config use-context kubernetes-admin@kubernetes
```

## create worker 1
```bash
cd ./worker
vagrant up
```
### access master
```bash
ssh root@172.16.10.100
kubeadm token create --print-join-command
```
### access worker 1
```bash
ssh root@172.16.10.101
rm /etc/containerd/config.toml
systemctl restart containerd

kubeadm join 172.16.10.100:6443 --token k23x8h.ht95c4tioii0r6gh \
	--discovery-token-ca-cert-hash sha256:8429bc1f7f80f8487f39c4b2ae40ad579ba3813755790179aac4afa6dab02d98
```
