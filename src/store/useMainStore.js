import create from 'zustand'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'

const useMainStoreBase = create(
  set => ({
    focusTarget: null,
    setFocusTarget: focusTarget => set({ focusTarget }),

    cameraPosition: [-4, 1.5, 0],
    setCameraPosition: cameraPosition => set({ cameraPosition }),

    controlsTargetOffset: [4,0,0],
    setControlsTargetOffset: controlsTargetOffset => set({ controlsTargetOffset }),

    back: () => {
      set({ focusTarget: null })
      set({ cameraPosition: [0,2,0] })
      set({ controlsTargetOffset: [0,2,-.01] })
    }
  })
)

const useMainStore = createSelectorHooks(useMainStoreBase)

export default useMainStore