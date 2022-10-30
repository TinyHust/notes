## http2

```typescript
import { NestApplication, NestFactory } from "@nestjs/core";
import { Server, ServerOptions } from "spdy";
import { AppModule } from "./app.module";
import * as express from "express";
import * as fs from "fs";
import * as spdy from "spdy";
import { ExpressAdapter } from "@nestjs/platform-express";

async function bootstrap() {
  const expressApp: express.Express = express();

  const spdyOpts: ServerOptions = {
    key: fs.readFileSync(__dirname + "/test.key"),
    cert: fs.readFileSync(__dirname + "/test.crt"),
  };

  const server: Server = spdy.createServer(spdyOpts, expressApp);

  const app: NestApplication = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

  await app.init();
  await server.listen(3007);
}
bootstrap();
```
