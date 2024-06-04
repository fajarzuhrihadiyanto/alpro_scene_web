const Door = ({ nodes, materials }) => {
    return (
        <>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.door_left_body.geometry}
                material={materials['Material.002']}
                position={[-6.029, 0, 1.018]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.5, 1, 1.125]}
            />
            <group position={[-5.974, 1.138, 0.168]} rotation={[0, Math.PI / 2, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_2.geometry}
                    material={materials['Material.001']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.door_right_body.geometry}
                material={materials['Material.002']}
                position={[-6.029, 0, -0.982]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.5, 1, 1.125]}
            />
            <group position={[-5.974, 1.138, -0.132]} rotation={[0, Math.PI / 2, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_2.geometry}
                    material={materials['Material.001']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.door_frame.geometry}
                material={materials['Material.003']}
                position={[-6.004, 2.325, 0.018]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 0.075, 0.1]}
            />
            <group position={[-6.034, 1.138, 0.168]} rotation={[0, -1.571, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_2.geometry}
                    material={materials['Material.001']}
                />
            </group>
            <group position={[-6.034, 1.138, -0.132]} rotation={[0, -1.571, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder004.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder004_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder004_2.geometry}
                    material={materials['Material.001']}
                />
            </group>
        </>
    )
}

export default Door