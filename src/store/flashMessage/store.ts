import { atom } from 'jotai'

export type FlashMessage = {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
}

export const flashMessagesAtom = atom<FlashMessage[]>([])
