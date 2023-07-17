import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { Vector3 } from 'three';

type ModelProps = {
    url: string;
    position: Vector3;
    scale: Vector3;
};

const Model: React.FC<ModelProps> = ({ url, position, scale }) => {
    const { scene } = useGLTF(url);
    return <group scale={scale} position={position}>
        <primitive object={scene} />
    </group>
}

export default function ModelMain() {
    const [scale, setScale] = useState<Vector3>(new Vector3(0.25, 0.25, 0.25));
    const [position, setPosition] = useState<Vector3>(new Vector3(0, -2, 0));
    
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Canvas>
                <ambientLight />
                <pointLight position={[30, 10, 10]} />
                <Model url='/models/building1.glb' position={position} scale={scale} />
            </Canvas>
            <div className="bg-blue-50 p-2" onClick={()=>{
                setPosition(new Vector3(0, -2, 0));
                setScale(new Vector3(0.25, 0.25, 0.25));
            }}>
                Set
            </div>
        </div>
    );
}
