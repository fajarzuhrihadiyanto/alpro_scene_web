import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import useMainStore from "../store/useMainStore"
import WorkingArea from "./components/WorkingArea"
import { FOCUS_BOOKS } from "../constants"
import Tooltip from "../components/Tootlip"
import BookPage from "../html/BookPage"

const BookArea = ({ nodes, materials }) => {
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
            setFocusTarget(FOCUS_BOOKS)
            setCameraPosition([1.252, .95, -1.226 - .3])
            setControlsTargetOffset([0, 0, .01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <WorkingArea nodes={nodes} materials={materials} position={[.95, 0.75, -.95]} rotation={[0, -Math.PI / 2, 0]} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    {focusTarget === FOCUS_BOOKS && <BookPage />}
                </WorkingArea>
            </Select>
            <Tooltip position={[.95, 1.75, -.95]} rotation={[0, Math.PI, 0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Buku</p>
            </Tooltip>
        </>
    )
}

export default BookArea