import React from "react"

import Book from "./Book"

const BookRow = ({ nodes, materials, ...props }) => {

    const [heights, setHeights] = React.useState([])
    const [colorHues, setColorHues] = React.useState([])
    const [bookCount, setBookCount] = React.useState(20)

    React.useEffect(() => {
        setHeights(Array(30).fill().map(() => Math.random() * .5 + .5))
        setColorHues(Array(30).fill().map(() => Math.round(Math.random() * 360)))
        setBookCount(Math.round(Math.random() * 13) + 15)
    }, [])

    return (
        <group {...props}>
            {Array(bookCount).fill().map((_, i) =>{
                const colorHue = colorHues[i]
                const height = heights[i]
                return <Book 
                    nodes={nodes}
                    materials={materials}
                    position={[.05 * i, - ((1-height) * .4 / 2), 0]}
                    scale={[1,height,1]}
                    color={`hsl(${colorHue}, 50%, 50%)`}/>
            }
            )}
        </group>
    )
}

export default BookRow