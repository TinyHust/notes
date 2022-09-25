# add multiple profile

~/.aws/config
```
[default]
region=us-west-2
output=json

[profile user1]
region=us-east-1
output=text
```

~/.aws/credentials
```
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

[user1]
aws_access_key_id=AKIAI44QH8DHBEXAMPLE
aws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY
```

## using
```
aws ec2 describe-instances --profile user1
```

## temp change profile
linux
```
export AWS_PROFILE=user1
```
windows
```
setx AWS_PROFILE user1
#set AWS_PROFILE user1
```