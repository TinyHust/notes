# openssl generate tls key and certificate

```bash
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout test.key -out test.crt
```
