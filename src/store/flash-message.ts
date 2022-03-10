import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

export type FlashMessage = {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
}
type FlashMessageStore = {
  items: FlashMessage[]
}

const initialState: FlashMessageStore = {
  items: [],
}

export const flashMessageStore = proxy<FlashMessageStore>(initialState)

export const flashMessageStoreActions = {
  addMessage(message: FlashMessage) {
    flashMessageStore.items.push(message)
  },
  removeMessage(id: FlashMessage['id']) {
    flashMessageStore.items = flashMessageStore.items.filter((item) => item.id !== id)
  },
  reset() {
    Object.entries(initialState).forEach(([key, value]) => {
      flashMessageStore[key] = value
    })
  },
}

if (process.env.NODE_ENV !== 'production') {
  devtools(flashMessageStore, 'flashMessageStore')
}
