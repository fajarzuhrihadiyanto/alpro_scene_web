const LabChair = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.lab_chair_structure.geometry}
                material={materials['lab chair_structure']}
                
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.lab_chair_seat_pillow.geometry}
                material={materials['lab chair_pillow']}
                position={[.203, 0.403, 0]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.lab_chair_seat_base.geometry}
                material={materials['lab chair_base']}
                position={[.203, 0.399, 0]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.lab_chair_backrest_pillow.geometry}
                material={materials['lab chair_pillow']}
                position={[-0.005, 0.65, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.lab_chair_backrest_base.geometry}
                material={materials['lab chair_base']}
                position={[-0.008, 0.65, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.15, 1, 0.25]}
            />
        </group>
    )
}

export default LabChair