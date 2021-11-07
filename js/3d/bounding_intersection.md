bounding intersection

```
box1.updateMatrixWorld();
box2.updateMatrixWorld();
var bounding1 = box1.geometry.boundingBox.clone();
bounding1.applyMatrix4(box1.matrixWorld);
var bounding2 = box2.geometry.boundingBox.clone();
bounding2.applyMatrix4(box2.matrixWorld);

if(bounding1.intersectsBox(bounding2)){
//collision, reject placement
}
```