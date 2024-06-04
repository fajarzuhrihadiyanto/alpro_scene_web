const BalloonYellow = ({ nodes, materials }) => {
    materials.balloon_yellow.transparent = true
    return (
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.balloon_stick.geometry}
            material={materials.balloon_stick}
            position={[0, 0.994, 0]}
            rotation={[-0.064, -0.188, 0.225]}
            scale={[0.005, 0.3, 0.005]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.balloon001.geometry}
                material={materials.balloon_yellow}
                position={[0, 2.98, 0]}
                scale={[200, 3.333, 200]}
            />
        </mesh>
    )
}

export default BalloonYellow