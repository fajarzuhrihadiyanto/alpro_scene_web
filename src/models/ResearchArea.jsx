import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../store/useMainStore"
import WorkingArea from "./components/WorkingArea"
import { FOCUS_RESEARCH } from "../constants"
import Tooltip from "../components/Tootlip"
import ResearchPage from "../html/ResearchPage"

const ResearchArea = ({ nodes, materials }) => {
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
            setFocusTarget(FOCUS_RESEARCH)
            setCameraPosition([2.5, .95, 1.276])
            setControlsTargetOffset([-0.01, 0, 0])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <WorkingArea nodes={nodes} materials={materials} position={[2, 0.75, 1]} rotation={[0, Math.PI, 0]} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    {focusTarget === FOCUS_RESEARCH && <ResearchPage />}
                </WorkingArea>
            </Select>
            <Tooltip position={[2, 1.75, 1]} rotation={[0,Math.PI/2,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Penelitian</p>
            </Tooltip>
        </>
    )
}

export default ResearchArea