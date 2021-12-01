camera pan

```
function damp(target, to, step, delta, v = new THREE.Vector3()) {
  if (target instanceof THREE.Vector3) {
    target.x = THREE.MathUtils.damp(target.x, to[0], step, delta)
    target.y = THREE.MathUtils.damp(target.y, to[1], step, delta)
    target.z = THREE.MathUtils.damp(target.z, to[2], step, delta)
  }
}

const [zoom, set] = useState(true)
useFrame((state, delta) => {
  const step = 4
  state.camera.fov = THREE.MathUtils.damp(state.camera.fov, zoom ? 10 : 42, step, delta)
  damp(state.camera.position, [zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10], step, delta)
  state.camera.lookAt(0, 0, 0)
  state.camera.updateProjectionMatrix()
})
```