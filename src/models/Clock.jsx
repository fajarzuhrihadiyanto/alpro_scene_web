import React from "react"
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js"
import { extend } from "@react-three/fiber"

import seven from '../fonts/Seven Segment_Regular.json'

extend({ TextGeometry })

const Clock = ({ nodes, materials }) => {

    const font = new FontLoader().parse(seven)
    const option = {hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta'}

    const [time, setTime] = React.useState(new Date().toLocaleTimeString('en-ID', option))

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-ID', option))

            console.log(time)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <group position={[-5.975, 3.158, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube007.geometry}
                    material={materials.clock_frame}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube007_1.geometry}
                    material={materials.clock_screen}
                />
                <mesh rotation={[-Math.PI / 2,0,0]} position={[-.85,.01,.15]}>
                    <textGeometry args={[`${time} WIB`, {font, size: .35, height: .01}]} />
                    <meshStandardMaterial attach='material' color='white' />
                </mesh>
            </group>
        </>
    )
}

export default Clock