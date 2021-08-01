```
terraform init
terraform apply
```

```
terraform console
exit
```

## Inspect the current state
```
terraform show
```

## Destroy Infrastructure
```
terraform destroy
```

## input var
```
terraform apply -auto-approve -var"var_name=var_value"
```

**terminology**:  
data template  
for_each  
dynamic block  
cidrsubnet()  
run terraform from jenkins