## http2

### generate tls certificate

```bash
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout test.key -out test.crt
```

```javascript
const port = 5000;
const spdy = require("spdy");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("*", (req, res) => {
  res.status(200).json({ message: "ok" });
});
const options = {
  key: fs.readFileSync(__dirname + "/test.key"),
  cert: fs.readFileSync(__dirname + "/test.crt"),
};

spdy.createServer(options, app).listen(port, (error) => {
  if (error) {
    console.error(error);
    return process.exit(1);
  } else {
    console.log("Listening on port: " + port + ".");
  }
});
```
