## intersectPlane

```
const [isDragging, setIsDragging] = useState(false);
const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

<Obj setIsDragging={setIsDragging} floorPlane={floorPlane} />

let planeIntersectPoint = new THREE.Vector3();

<mesh 
  onPointerMove={(event) => {
    event.ray.intersectPlane(floorPlane, planeIntersectPoint);
  }}
</mesh>
```