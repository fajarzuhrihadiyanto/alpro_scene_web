const Mouse = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mouse_body.geometry}
                material={materials.mouse_body}
                rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mouse_scroll_button.geometry}
                material={materials['mouse_scroll button']}
                position={[.023, -.003, 0]}
                rotation={[Math.PI, 0, Math.PI]}
            />
        </group>
    )
}

export default Mouse