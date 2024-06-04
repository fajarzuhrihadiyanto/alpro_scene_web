const Monitor = ({ nodes, materials, children, ...props }) => {
    return (
        <group {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitor_base.geometry}
                material={materials.monitor_base}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitor_pole.geometry}
                material={materials.monitor_base}
                position={[0, 0.08, 0]}
            />
            <group position={[0, 0.212, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane005.geometry}
                    material={materials.monitor_base}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane005_1.geometry}
                    material={materials.monitor_light}
                />
            </group>
            {children}
        </group>
    )
}

export default Monitor