const Book = ({ nodes, materials, color, ...props }) => {
    return (
        <group {...props}>
            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube015.geometry}
                    material={materials.book_cover}
                >
                    color && <meshStandardMaterial color={color} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube015_1.geometry}
                    material={materials.book_page}
                />
            </group>
            <group rotation={[0, 0, Math.PI]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube016.geometry}
                    material={materials.book_cover}
                >
                    color && <meshStandardMaterial color={color} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube016_1.geometry}
                    material={materials.book_page}
                />
            </group>
        </group>
    )
}

export default Book