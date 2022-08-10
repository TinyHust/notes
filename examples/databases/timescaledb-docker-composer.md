## timescaledb docker-composer.yml

```yaml
version: "3.8"
services:
  timescaledb:
    image: timescale/timescaledb:latest-pg13
    ports:
      - 5433:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: Jaddlk2021
      POSTGRES_DB: artemis_aggregator_localhost
    networks:
      - localtest
networks:
  localtest:
```
