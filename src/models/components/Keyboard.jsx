const Keyboard = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_buttons.geometry}
                material={materials.keyboard_buttons}
                rotation={[0, -Math.PI / 2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_base.geometry}
                material={materials.keyboard_base}
                position={[0.058, -.005, -0.172]}
                rotation={[0, -Math.PI/2, 0]}
            />
        </group>
    )
}

export default Keyboard