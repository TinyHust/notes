## top level only

```javascript
require("util").inspect.defaultOptions.depth = 0;
```

## print everything

```javascript
require("util").inspect.defaultOptions.depth = null;

#typescript
import * as util from 'util';
util.inspect.defaultOptions.depth = null;
```

**or**

```javascript
console.dir(obj, { depth: null });
```
