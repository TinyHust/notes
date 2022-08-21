## upload whole folder
```html
<input type="file" id="folder" webkitdirectory multiple/>
<!--
Doesn't work on mobile.
Support: https://caniuse.com/#search=webkitdirectory
-->
```

```javascript
document.getElementById("folder").addEventListener("change", function(event) {
  var output = document.querySelector("ul");
  var files = event.target.files;

  for (var i=0; i<files.length; i++) {
    var item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
}, false);
```