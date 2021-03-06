import { atom } from 'recoil'

export type FlashMessage = {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
}
type FlashMessageState = FlashMessage[]

export const flashMessageState = atom<FlashMessageState>({
  key: 'flashMessageState',
  default: [],
})
