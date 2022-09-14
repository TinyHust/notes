## http2

server.js

```javascript
const path = require("path");
const http2 = require("http2");
const fs = require("fs");
const mime = require("mime");

const { HTTP2_HEADER_PATH } = http2.constants;

const getFile = (path) => {
  const filePath = `${__dirname}/${path}`;

  try {
    const content = fs.openSync(filePath, "r");
    const contentType = mime.getType(filePath);
    return {
      content,
      headers: {
        "content-type": contentType,
      },
    };
  } catch (e) {
    console.log("error => ", e);
    return null;
  }
};

function http1xhandler(req, res) {
  if (req.httpVersion === "2.0") {
    // Ignore HTTP/2 requests, will be handled by the on("stream", ...) event handler
    // Or, you can answer the HTTP/2 request here, using HTTP/2 features as well
    return;
  }

  // Handle HTTP/1x request
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello HTTP/1x!");
}

const server = http2.createSecureServer(
  {
    cert: fs.readFileSync(path.join(__dirname, "/test.crt")),
    key: fs.readFileSync(path.join(__dirname, "/test.key")),
  },
  http1xhandler
);

function push(stream, path) {
  const file = getFile(path);
  if (!file) {
    return;
  }
  stream.pushStream(
    {
      [HTTP2_HEADER_PATH]: path,
    },
    (err, pushStream, headers) => {
      console.log(file.headers);
      pushStream.respondWithFD(file.content, file.headers);
    }
  );
}

server.on("stream", (stream, headers) => {
  push(stream, "/bundle1.js");
  push(stream, "/bundle2.js");

  const file = getFile("/index.html");
  stream.respondWithFD(file.content, file.headers);
});

server.listen(3000, () => console.log("App listening on port 3000"));
```

index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>

    <script src="/bundle1.js"></script>
  </body>
</html>
```
