import Door from "./Door"

const Room = ({ nodes, materials }) => {
    return (
        <>
            <group scale={[4.5, 5.179, 4.5]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials.room_ceiling}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_1.geometry}
                    material={materials.room_floor}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_2.geometry}
                    material={materials.room_light}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_3.geometry}
                    material={materials.room_wall}
                />
            </group>
            <Door nodes={nodes} materials={materials} />
        </>
    )
}

export default Room