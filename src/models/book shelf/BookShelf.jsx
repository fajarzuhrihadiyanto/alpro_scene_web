import BookRow from "./BookRow"

const BookShelf = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.book_shelf.geometry}
                material={materials['book shelf.002']}
                scale={[0.75, 0.25, 0.2]}
            />
            {Array(8).fill().map((_, i) => 
                Array(6).fill().map((_, j) => 
                    <BookRow nodes={nodes} materials={materials} position={[-.675 + 1.5 * i, 2.5 - .5 * j, .1]} />
                )
            )}
            
        </group>
    )
}

export default BookShelf