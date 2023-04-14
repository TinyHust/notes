gen-pb:
	protoc \
	--proto_path=src/proto --js_out=import_style=commonjs,binary:./src/proto \
  	--grpc-web_out=import_style=commonjs,mode=grpcweb:./src/proto \
	src/proto/*.proto && \
	protoc \
	--proto_path=src/proto --js_out=import_style=commonjs,binary:./src/proto \
  	--grpc-web_out=import_style=commonjs,mode=grpcweb:./src/proto \
	src/proto/google/api/*.proto && \
	protoc \
	--proto_path=src/proto --js_out=import_style=commonjs,binary:./src/proto \
  	--grpc-web_out=import_style=commonjs,mode=grpcweb:./src/proto \
	src/proto/protoc-gen-openapiv2/options/*.proto

gen-pb-vendor:
	protoc -I=. \
		--js_out=import_style=commonjs,binary:. \
  		--grpc-web_out=import_style=commonjs,mode=grpcweb:. \
  		src/protoVendor/*.proto
gen-pb-google:
	protoc --proto_path=src/proto --js_out=import_style=commonjs,binary:./src/proto \
  	--grpc-web_out=import_style=commonjs,mode=grpcweb:./src/proto src/*.proto
	
gen-pb-single:
	protoc \
	-I src/proto \
	-I src/proto/google/api \
	-I src/proto/protoc-gen-openapiv2/options \
	--js_out=import_style=commonjs,binary:src/proto \
	--grpc-web_out=import_style=commonjs,mode=grpcweb:src/proto \
	src/proto/action_service.proto
