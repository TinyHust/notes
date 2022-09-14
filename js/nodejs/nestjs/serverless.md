## serverless

serverless.ts

```typescript
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";
import serverlessExpress from "@vendia/serverless-express";
import { Callback, Context, Handler } from "aws-lambda";

import { AppModule } from "./app.module";

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
```

serverless.yaml

```yaml
service: cryptostats-backend

useDotenv: true

plugins:
  - serverless-offline

provider:
  name: aws
  runtime: nodejs12.x
  environment:
    MONGODB_URI: ${env:MONGODB_URI}

    JWT_SECRET: ${env:JWT_SECRET}
    JWT_EXPIRATION_TIME: ${env:JWT_EXPIRATION_TIME}

    COINBASE_CLIENT_ID: ${env:COINBASE_CLIENT_ID}
    COINBASE_CLIENT_SECRET: ${env:COINBASE_CLIENT_SECRET}
    COINBASE_REDIRECT_URI: ${env:COINBASE_REDIRECT_URI}

    ENCRYPTION_KEY: ${env:ENCRYPTION_KEY}

    AUTH_REDIRECT_URI: ${env:AUTH_REDIRECT_URI}

functions:
  main:
    handler: dist/serverless.handler
    events:
      - http:
          method: ANY
          path: /
      - http:
          method: ANY
          path: "{proxy+}"
```
