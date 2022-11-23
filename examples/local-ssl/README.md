[REF](https://viblo.asia/p/tao-ssl-certificate-authority-cho-https-tren-local-1VgZvpQY5Aw)
[REF](https://www.section.io/engineering-education/how-to-get-ssl-https-for-localhost/)

## Generate a root CA certificate

```
openssl genrsa -des3 -out rootCA.key 2048
openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1825 -out rootCA.pem
```

## Setting Root Certificate for Chrome

open `chrome://settings/certificates` → select **Authorities** tab → **IMPORT** rootCA.pem → OK

## Setting Root Certificate for FireFox

open `about:preferences#privacy` → Certificates → View Certificates → Import rootCA.pem

## Setting Root Certificate for Postman

Settings → Certificates → turn on **CA Certificates** → import rootCA.pem

## HTTPS for local site

```
openssl genrsa -out localhost.com.key 2048
openssl req -new -key localhost.com.key -out localhost.com.csr
openssl x509 -req -in localhost.com.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out localhost.com.crt -days 1825 -sha256 -extfile localhost.com.ext
```

## set host

```
sudo vi /etc/hosts
```

127.0.0.1 localhost.com

## NestJs shttps

[REF](https://docs.nestjs.com/faq/multiple-servers)
