## wordpress debug

```
ob_start();
var_dump();
error_log( ob_get_clean() );
```

```
define('WP_DEBUG', true);
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
```