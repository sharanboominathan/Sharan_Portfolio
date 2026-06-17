import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function AnimatedSphere() {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
                color="#7c3aed"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.1}
                transparent
                opacity={0.35}
            />
        </Sphere>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={1.5} color="#f0ebff" />
                <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
                <pointLight position={[-10, -10, -5]} intensity={0.8} color="#ea580c" />
                <pointLight position={[10, -5, 5]} intensity={0.4} color="#7c3aed" />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
