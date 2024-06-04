import Cubicle from "./Cubicle"
import Keyboard from "./Keyboard"
import LabChair from "./LabChair"
import Monitor from "./Monitor"
import Mouse from "./Mouse"
import Pc from "./Pc"

const WorkingArea = ({ nodes, materials, children, ...props }) => {
    return (
        <group {...props}>
            <Cubicle nodes={nodes} materials={materials} rotation={[Math.PI, 0, Math.PI]}/>
            <Monitor nodes={nodes} materials={materials} position={[-0.151, 0, -0.276]} rotation={[Math.PI, 0, Math.PI]}>
                {children}
            </Monitor>
            <Keyboard nodes={nodes} materials={materials} position={[-0.435, 0.02, -0.09]}/>
            <Mouse nodes={nodes} materials={materials} position={[-0.355, 0.015, .118]}/>
            <Pc nodes={nodes} materials={materials} position={[-0.21, 0.194, .293]}/>
            <LabChair nodes={nodes} materials={materials} position={[-0.971, -.75, -0.281]}/>
        </group>
    )
}

export default WorkingArea