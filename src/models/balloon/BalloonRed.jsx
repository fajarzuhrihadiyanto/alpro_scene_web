const BalloonRed = ({ nodes, materials }) => {
    materials.balloon_red.transparent = true
    return (
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.balloon_stick.geometry}
            material={materials.balloon_stick}
            position={[0, 0.994, 0]}
            rotation={[-0.155, 0.205, -0.231]}
            scale={[0.005, 0.3, 0.005]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.balloon002.geometry}
                material={materials.balloon_red}
                position={[0, 2.98, 0]}
                scale={[200, 3.333, 200]}
            />
        </mesh>
    )
}

export default BalloonRed