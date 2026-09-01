import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FloatingShapes from "./FloatingShapes";

const Scene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 7],
        fov: 50,
      }}
      dpr={[1, 1.5]}
    >
      {/* Lights */}

      <ambientLight intensity={2} />

      <directionalLight position={[5, 5, 5]} intensity={3} />

      <pointLight position={[-5, -3, 2]} intensity={2} color="#FF4FD8" />

      {/* World */}

      <FloatingShapes />

      {/* Temporary controls */}

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Scene;
