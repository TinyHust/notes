## r3f shadow

```
<Canvas
    colorManagement
    shadowMap
    camera={{ position: [-3, 2, 5], fov: 90 }}
>
    <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
    />
    <Box castShadow ref={boxRef} position={[0, 0.5, 0]}>
        <meshStandardMaterial attach="material" color="white" />
    </Box>
    <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        args={[1000, 1000]}
    >
        <meshStandardMaterial attach="material" color="white" />
    </Plane>
</Canvas>
```