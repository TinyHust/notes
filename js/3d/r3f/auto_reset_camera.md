auto reset camera

```
const positionVec = new Vector3(8,3,3);

useFrame((state) => {
  const step = 0.05;
  state.camera.position.lerp(positionVec, step);
  state.camera.updateProjectionMatrix();
}
```