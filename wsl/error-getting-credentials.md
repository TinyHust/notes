## error getting credentials
REF: [https://hackernoon.com/getting-rid-of-docker-plain-text-credentials-88309e07640d](https://hackernoon.com/getting-rid-of-docker-plain-text-credentials-88309e07640d)  

```
wget https://github.com/docker/docker-credential-helpers/releases/download/v0.4.2/docker-credential-secretservice-v0.4.2-amd64.tar.gz && tar -xf docker-credential-secretservice-v0.4.2-amd64.tar.gz && chmod +x docker-credential-secretservice && sudo mv docker-credential-secretservice /usr/local/bin/
```

```
sed -i '0,/{/s/{/{\n\t"credsStore": "secretservice",/' ~/.docker/config.json
```