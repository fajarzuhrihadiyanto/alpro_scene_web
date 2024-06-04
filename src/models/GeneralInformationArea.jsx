import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import { FOCUS_GENERAL_INFORMATION } from "../constants"
import GeneralInformationPage from "../html/GeneralInformationPage"
import useMainStore from "../store/useMainStore"
import WorkingArea from "./components/WorkingArea"
import Tooltip from "../components/Tootlip"

const GeneralInformationArea = ({ nodes, materials }) => {
    
    // get the state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    const [isHovered, setIsHovered] = React.useState(false)

    const onPointerOver = React.useCallback((e) => {
        e.stopPropagation()
        if (focusTarget === null) setIsHovered(true)
    }, [focusTarget])

    const onPointerOut = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(false)
    }, [focusTarget])

    const onClick = React.useCallback((e) => {
        e.stopPropagation()
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_GENERAL_INFORMATION)
            setCameraPosition([-2.551, .95, -1.276])
            setControlsTargetOffset([0.01, 0, 0])
        }
    }, [focusTarget])

    useCursor(isHovered)

    return (
        <>
            <Select enabled={isHovered}>
                <WorkingArea nodes={nodes} materials={materials} position={[-2.1, 0.75, -1]} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick} >
                    {focusTarget === FOCUS_GENERAL_INFORMATION && <GeneralInformationPage />}
                </WorkingArea>
            </Select>
            <Tooltip position={[-2.1, 1.75, -1]} rotation={[0,-Math.PI/2,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Informasi Umum</p>
            </Tooltip>
        </>
    )
}

export default GeneralInformationArea