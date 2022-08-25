## convert buff iamge data to base64

```javascript
function toBase64(arr) {
   //arr = new Uint8Array(arr) if it's an ArrayBuffer
   return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
   );
}

var arr = [255, 216, ...];

var src = `data:image/png;base64,${toBase64(arr)}`;
```
