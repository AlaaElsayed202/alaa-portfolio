import { Float, MeshDistortMaterial } from "@react-three/drei";

const FloatingShapes = () => {
  return (
    <>
      {/* Pink Sphere */}

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2, 1, 0]}>
          <sphereGeometry args={[0.7, 32, 32]} />

          <MeshDistortMaterial color="#FF4FD8" distort={0.35} speed={2} />
        </mesh>
      </Float>

      {/* Cyan Cube */}

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[2, -1, 0]} rotation={[0.4, 0.4, 0]}>
          <boxGeometry args={[1, 1, 1]} />

          <meshStandardMaterial color="#12D8FA" />
        </mesh>
      </Float>

      {/* Yellow Torus */}

      <Float speed={1} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[2, 1.8, -1]}>
          <torusGeometry args={[0.6, 0.18, 16, 32]} />

          <meshStandardMaterial color="#FFD44D" />
        </mesh>
      </Float>

      {/* Purple Sphere */}

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[-2, -1.5, -1]}>
          <sphereGeometry args={[0.45, 32, 32]} />

          <meshStandardMaterial color="#7C5CFF" />
        </mesh>
      </Float>
    </>
  );
};

export default FloatingShapes;
