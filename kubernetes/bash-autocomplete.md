# bash completion In Ubuntu
REF: 
[https://www.cyberciti.biz/faq/add-bash-auto-completion-in-ubuntu-linux/](https://www.cyberciti.biz/faq/add-bash-auto-completion-in-ubuntu-linux/)

```
sudo apt install bash-completion
```
## source it from ~/.bashrc or ~/.bash_profile ##
```
echo "source /etc/profile.d/bash_completion.sh" >> ~/.bashrc
```
## Another example Check and load it from ~/.bashrc or ~/.bash_profile ##
```
grep -wq '^source /etc/profile.d/bash_completion.sh' ~/.bashrc || echo 'source /etc/profile.d/bash_completion.sh'>>~/.bashrc
```

## enable bash completion on Ubuntu
```
source /etc/profile.d/bash_completion.sh
```

## Enable kubectl autocompletion
REF: 
[https://kubernetes.io/docs/tasks/tools/included/optional-kubectl-configs-bash-linux/](https://kubernetes.io/docs/tasks/tools/included/optional-kubectl-configs-bash-linux/)  

## Source the completion script in your ~/.bashrc file:
```
echo 'source /usr/share/bash-completion/bash_completion' >>~/.bashrc
echo 'source <(kubectl completion bash)' >>~/.bashrc
```

## Add the completion script to the /etc/bash_completion.d directory:
```
kubectl completion bash >/etc/bash_completion.d/kubectl
```
## if an error occurs
### -bash: /etc/bash_completion.d/kubectl: Permission denied
```
kubectl completion bash |sudo tee /etc/bash_completion.d/kubectl
```

## Usage
Press TAB button twice