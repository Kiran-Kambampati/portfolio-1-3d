import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#00f3ff"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  );
};

const TechOrbit = ({ technologies }) => {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <AnimatedSphere />
      </Canvas>
      
      {/* Orbiting tech icons */}
      <div className="relative -mt-96 h-96 overflow-hidden">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute top-1/2 left-1/2 w-12 h-12 -mt-6 -ml-6"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: `${100 + index * 30}px center`,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.5 }}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-2xl hover-text-neon-blue transition-colors"
            >
              <tech.icon style={{ color: tech.color }} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechOrbit;
