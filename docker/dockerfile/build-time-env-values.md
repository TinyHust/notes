## ARG is only available during the build of a Docker image (RUN etc), not after the image is created and containers are started from it (ENTRYPOINT, CMD)

```yml
ARG buildtime_variable=default_value # <- this one's new
ENV env_var_name=$buildtime_variable # we reference it directly
```
use in Dockerfile
```yaml
ARG GIT_COMMIT
RUN echo "Based on commit: $GIT_COMMIT"
```
or when build image

```bash
docker build --build-arg buildtime_variable=a_value # ... the rest of the build command is omitted
```
or in docker-compose.yaml
```yaml
services:
  orders:
    build:
      context: .
      dockerfile: ./apps/orders/Dockerfile
      target: development
      args:
        buildtime_variable: cdc3b19
```
