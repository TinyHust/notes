## ARG is only available during the build of a Docker image (RUN etc), not after the image is created and containers are started from it (ENTRYPOINT, CMD)

```
ARG buildtime_variable=default_value # <- this one's new
ENV env_var_name=$buildtime_variable # we reference it directly
```

```
docker build --build-arg buildtime_variable=a_value # ... the rest of the build command is omitted
```
