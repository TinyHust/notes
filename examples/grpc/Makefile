gen-pb:
	protoc -I=. --js_out=import_style=commonjs,binary:. \
  --grpc-web_out=import_style=commonjs,mode=grpcweb:. src/proto/*.proto
