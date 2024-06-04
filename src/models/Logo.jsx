const Logo = ({ nodes, materials }) => {
    return (
        <>
            <group position={[5.974, 2.502, -2.108]} rotation={[0, 0, Math.PI / 2]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder.geometry}
                    material={materials.logo}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_1.geometry}
                    material={materials.logo_image}
                />
            </group>
            <group
                position={[5.974, 2.634, -1.456]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={0.523}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Text.geometry}
                    material={materials['logo text_laboratorium']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Text_1.geometry}
                    material={materials['logo text_algoritma']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Text_2.geometry}
                    material={materials['logo text_pemrograman']}
                />
            </group>
        </>
    )
}

export default Logo