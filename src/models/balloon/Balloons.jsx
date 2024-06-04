import BalloonBlue from "./BalloonBlue"
import BalloonRed from "./BalloonRed"
import BalloonYellow from "./BalloonYellow"

const Balloons = ({ nodes, materials }) => {
    return (
        <>
            <BalloonBlue nodes={nodes} materials={materials} />
            <BalloonYellow nodes={nodes} materials={materials} />
            <BalloonRed nodes={nodes} materials={materials} />
            <mesh position={[0, .5, 0]}>
                <boxGeometry args={[.02,1,.02]} />
            </mesh>
        </>
    )
}

export default Balloons