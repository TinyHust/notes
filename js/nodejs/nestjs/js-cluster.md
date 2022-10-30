# run multiple instances of NestJS

[REF](https://wanago.io/2021/01/11/nestjs-cache-redis-node-js-cluster/)

runInCluster.ts

```javascript
import * as cluster from "cluster";
import * as os from "os";

export function runInCluster(bootstrap: () => Promise<void>) {
  const numberOfCores = os.cpus().length;

  if (cluster.isMaster) {
    for (let i = 0; i < numberOfCores; ++i) {
      cluster.fork();
    }
  } else {
    bootstrap();
  }
}
```

main.ts

```javascript
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";
import { ExcludeNullInterceptor } from "./utils/excludeNull.interceptor";
import { ConfigService } from "@nestjs/config";
import { config } from "aws-sdk";
import { runInCluster } from "./utils/runInCluster";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );
  app.useGlobalInterceptors(new ExcludeNullInterceptor());
  app.use(cookieParser());

  const configService = app.get(ConfigService);
  config.update({
    accessKeyId: configService.get("AWS_ACCESS_KEY_ID"),
    secretAccessKey: configService.get("AWS_SECRET_ACCESS_KEY"),
    region: configService.get("AWS_REGION"),
  });

  await app.listen(3000);
}
runInCluster(bootstrap);
```
