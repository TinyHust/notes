[REFs](https://face-draw.andrewprifer.vercel.app/)

```
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useFrame, useLoader, useRender } from 'react-three-fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model: React.FC<
  JSX.IntrinsicElements['group'] & { enableDrawing: boolean }
> = props => {
  const group = useRef();
  const gltf = useLoader(GLTFLoader as any, 'https://cdn.jsdelivr.net/gh/TinyHust/assets/models/head.glb') as any;
  const textureCubeRef = useRef<THREE.CubeTexture>();

  const canvasRef = useRef(document.createElement('canvas'));
  const textureRef = useRef<THREE.CanvasTexture>();

  useEffect(() => {
    const loader = new THREE.CubeTextureLoader();
    loader.setPath('https://threejs.org/examples/textures/cube/Bridge2/');
    var urls = [
      'posx.jpg',
      'negx.jpg',
      'posy.jpg',
      'negy.jpg',
      'posz.jpg',
      'negz.jpg',
    ];

    textureCubeRef.current = loader.load(urls);
    textureCubeRef.current.format = THREE.RGBFormat;
    textureCubeRef.current.needsUpdate = true;
  }, []);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = 1024;
    canvas.height = 1024;

    const context = canvas.getContext('2d');
    if (context) {
      context.rect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#ffdbac';
      context.fill();
    }
  }, []);

  return (
    <group
      ref={group}
      {...props}
      onPointerMove={({
        uv,
        buttons,
        stopPropagation,
        preventDefault,
        ...rest
      }) => {
        if (!props.enableDrawing) {
          return;
        }
        if (uv) {
          const canvas = canvasRef.current;

          const x = uv.x * canvas.width;
          const y = (1 - uv.y) * canvas.height;

          const context = canvas.getContext('2d');
          if (context) {
            context.beginPath();
            context.arc(x - 2, y - 2, 4, 0, 2 * Math.PI);
            context.fillStyle = 'black';
            context.fill();
            textureRef.current!.needsUpdate = true;
          }
        }
      }}
    >
      <scene name="Scene">
        <mesh name="bust" rotation={[1.5707964611537577, 0, 0]}>
          <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[3].material}
            name="Default OBJ"
          >
            <canvasTexture
              ref={textureRef}
              attach="map"
              image={canvasRef.current}
            ></canvasTexture>
            <cubeTexture ref={textureCubeRef} attach="envMap" />
          </meshStandardMaterial>
        </mesh>
      </scene>
    </group>
  );
};

export default Model;

```