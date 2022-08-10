## redis docker-composer.yml

```yaml
version: "3.1"

services:
  redis:
    image: redis:5.0.5-alpine3.9
    restart: always
    ports:
      - 6379:6379
    environment:
      REDIS_PASSWORD: redis
    command: >
      /bin/sh -c 'redis-server --appendonly yes --requirepass $${REDIS_PASSWORD}'

  redis2:
    image: redis:5.0.5-alpine3.9
    restart: always
    ports:
      - 6380:6379
    environment:
      REDIS_PASSWORD: redis
    command:
      - /bin/sh
      - -c
      - |
        redis-server 
        --appendonly yes 
        --requirepass $${REDIS_PASSWORD}
```
