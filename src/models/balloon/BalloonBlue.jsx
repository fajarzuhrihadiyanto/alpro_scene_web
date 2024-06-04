const BalloonBlue = ({ nodes, materials }) => {

    materials.balloon_blue.transparent = true

    return (
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.balloon_stick.geometry}
            material={materials.balloon_stick}
            position={[0, 0.994, 0]}
            rotation={[0.244, 0.115, -0.085]}
            scale={[0.005, 0.3, 0.005]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.balloon.geometry}
                material={materials.balloon_blue}
                position={[0, 2.98, 0]}
                scale={[200, 3.333, 200]}
            />
        </mesh>
    )
}

export default BalloonBlue