import { create } from 'zustand'

export const useNavigationBarVisibleStore = create<{
  visible: boolean
  setVisibleTrue: () => void
  setVisibleFalse: () => void
}>((set) => ({
  visible: true,
  setVisibleTrue: () => set({ visible: true }),
  setVisibleFalse: () => set({ visible: false }),
}))
