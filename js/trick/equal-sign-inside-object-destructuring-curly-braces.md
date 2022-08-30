## equal sign inside object destructuring curly braces

### if field contains a resolve property

```javascript
const defaultFieldResolver = "defaultFieldResolver";

const field = { resolve: "resolve" };

const { resolve = defaultFieldResolver } = field;

console.log(resolve); //resolve
```

### if field doesn't contain a resolve property, assign defaultFieldResolver to the resolve variable instead

```javascript
const defaultFieldResolver = "defaultFieldResolver";

const field = {};

const { resolve = defaultFieldResolver } = field;

console.log(resolve); //defaultFieldResolver
```
