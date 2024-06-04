import BookShelf from "./BookShelf"

const BookShelfArea = ({ nodes, materials }) => {
    return (
        <>
            <BookShelf nodes={nodes} materials={materials} position={[-5.25, 0.25, -4.3]}/>
            <BookShelf nodes={nodes} materials={materials} position={[5.25, 0.25, 4.3]} rotation={[0, Math.PI, 0]}/>
        </>
    )
}

export default BookShelfArea