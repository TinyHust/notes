## get mesh wireframe

```
var edges = new THREE.EdgesGeometry( model.children[ 0 ].geometry );
let line = new THREE.LineSegments( edges );
```