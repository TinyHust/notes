## layers
[REF](https://threejs.org/docs/#api/en/core/Layers)  
[example](https://github.com/mrdoob/three.js/blob/master/examples/webgl_layers.html)  

```
camera.layers.enable( 0 );
camera.layers.enable( 1 );

light.layers.enable( 0 );
light.layers.enable( 1 );

object.layers.set( 0 );

camera.layers.toggle( 0 );
camera.layers.enableAll();
camera.layers.disableAll();
```