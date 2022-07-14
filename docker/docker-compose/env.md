## .env in the same folder with docker-compose.yml
```
VARIABLE_NAME=some value
OTHER_VARIABLE_NAME=some other value, like 5
```

docker-compose.yml
```yml
version: '3'

services:
  plex:
    image: linuxserver/plex
      environment:
        - env_var_name=${VARIABLE_NAME} # here it is
```

## override the values in your .env file
```bash
VARIABLE_NAME="ENV" docker-compose up
```
