const Pc = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <group rotation={[0, Math.PI / 2, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019.geometry}
                    material={materials.pc_body_main}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_1.geometry}
                    material={materials.pc_body_rear}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pc_front.geometry}
                material={materials.pc_front}
                position={[-.144, 0.002, 0]}
                rotation={[0, Math.PI / 2, 0]}
            />
        </group>
    )
}

export default Pc