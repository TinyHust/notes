dashed moving line  
[REF](https://stackoverflow.com/questions/66566565/dashed-moving-line-react-three-fiber)

```
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 100);
camera.position.set(0, 0, 5);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

let g = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector2(-2, 2, 0),
  new THREE.Vector2(0, -2, 0),
  new THREE.Vector2(2, 2, 0)
]);
let uniforms = {
  time: {value: 0}
}
let m = new THREE.LineDashedMaterial({
  color: "yellow",
  dashSize: 0.5,
  gapSize: 0.25,
  onBeforeCompile: shader => {
    shader.uniforms.time = uniforms.time;
    shader.fragmentShader = `
      uniform float time;
      ${shader.fragmentShader}
    `.replace(
      `vLineDistance,`,
      `vLineDistance - time,`
    );
    //console.log(shader.fragmentShader);
  }
});
let l = new THREE.Line(g, m);
l.computeLineDistances();
scene.add(l);

let clock = new THREE.Clock();

renderer.setAnimationLoop( _ => {
  uniforms.time.value = clock.getElapsedTime();
  renderer.render(scene, camera);
});
```