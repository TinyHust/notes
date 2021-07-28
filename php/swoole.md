```
<?php
use Swoole\Http\Server;
use Swoole\Http\Request;
use Swoole\Http\Response;

$server = new Swoole\HTTP\Server("127.0.0.1", 8082);

$server->on("request", function (Request $request, Response $response) {
    $response->end("Hello World\n");
});

$server->start();
```