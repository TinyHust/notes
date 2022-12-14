## install protoc with the JavaScript plugin and protoc-gen-grpc-web

REF:

- [https://www.aapelivuorinen.com/blog/2020/07/03/grpc-web-nginx-envoy/](https://www.aapelivuorinen.com/blog/2020/07/03/grpc-web-nginx-envoy/)
- [https://daily.dev/blog/build-a-chat-app-using-grpc-and-reactjs](https://daily.dev/blog/build-a-chat-app-using-grpc-and-reactjs)

```bash
export PROTOC_VERSION=3.12.3

wget -O protoc.zip https://github.com/protocolbuffers/protobuf/releases/download/v$PROTOC_VERSION/protoc-$PROTOC_VERSION-linux-x86_64.zip

unzip protoc.zip

export GRPC_WEB_VERSION=1.2.0

wget -O protoc-gen-grpc-web https://github.com/grpc/grpc-web/releases/download/$GRPC_WEB_VERSION/protoc-gen-grpc-web-$GRPC_WEB_VERSION-linux-x86_64

mv ./protoc-gen-grpc-web /home/toanld/Downloads/bin

chmod +x /home/toanld/Downloads/bin/protoc-gen-grpc-web

echo 'export PATH=$PATH:/home/toanld/Downloads/bin' >> ~/.bashrc

source ~/.bashrc

# check version
protoc --version

# goto project
protoc -I=/home/toanld/sources/samples/grpc/client/src chat.proto --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
```
