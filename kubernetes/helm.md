# Install helm
```
curl https://baltocdn.com/helm/signing.asc | sudo apt-key add -
sudo apt-get install apt-transport-https --yes
echo "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
```

## install instance
### local chart
```
helm install [release_name] ./[chart_folder]/
```

### or install publish chart
### get values.uaml to custom: save to values.yaml and edit in vim
```
helm show values [chart_name] > values.yaml | vim -
```

## change values
```
helm upgrade [release_name] ./[chart_folder]/ -f new_values.yaml
```

## uninstall instance
```
helm uninstall [release_name]
```

## search chart
```
helm search hub [chart_name]
```
## view full info
```
helm search hub [chart_name] --max-col-width 0
```

## Create template
```
helm create mynginx
```
## Test template
```
helm lint ./
```
## Check template
```
helm template [release_name] ./ -f values.yaml
```
## package template
```
helm package ./[chart_folder]/ -d ./[publish_folder]/
helm repo index ./
```

## add github repo
```
helm repo add [repo_name] https://raw.githubusercontent.com/[user_name]/[git_repo_name]/[git_repo_branch]/
```

## List all release in all kubenetes namespaces
```
helm ls --all-namespaces
```

## List repo
```
helm repo list
```


## Fix: WARNING: Kubernetes configuration file is group-readable. This is insecure
### REF: [https://github.com/helm/helm/issues/9115](https://github.com/helm/helm/issues/9115)  
```
chmod go-r ~/.kube/config
```
### or
```
chmod 600 ~/.kube/config
```