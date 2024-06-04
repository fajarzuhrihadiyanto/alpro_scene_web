const Cubicle = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003.geometry}
                material={materials.cubicle_main}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_1.geometry}
                material={materials.cubicle_desk}
            />
        </group>
    )
}

export default Cubicle