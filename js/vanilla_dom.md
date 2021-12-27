# vanilla js, vanilla DOM

## clone node

```
let p = document.getElementById("para1")
let p_prime = p.cloneNode(true)
```

## get template content

```
<template id="my-paragraph">
  <p>My paragraph</p>
</template>

let template = document.getElementById('my-paragraph');
let templateContent = template.content;
```