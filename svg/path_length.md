path length

```
svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path id="shape" d="M0 0 H 100 V 100 H 0 L 0 0" fill="purple"/>
</svg>

const length = document.getElementById('shape').getTotalLength();
```