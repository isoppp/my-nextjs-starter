import { FlashMessage, flashMessageState } from '@/store/flash-message'
import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

type Dispatcher = {
  addSuccessMessage(message: string): void
  addErrorMessage(message: string): void
  addInfoMessage(message: string): void
  removeMessage(id: string): void
}

export const useFlashMessageDispatcher = (): Dispatcher => {
  const setFlashMessageState = useSetRecoilState(flashMessageState)
  const addMessage = useCallback(
    (message: Omit<FlashMessage, 'id'>) => {
      const id = Date.now().toString()
      setFlashMessageState((cur) => [...cur, { ...message, id }])
    },
    [setFlashMessageState],
  )

  const addSuccessMessage = useCallback((message: string) => addMessage({ message, type: 'success' }), [addMessage])
  const addErrorMessage = useCallback((message: string) => addMessage({ message, type: 'error' }), [addMessage])
  const addInfoMessage = useCallback((message: string) => addMessage({ message, type: 'error' }), [addMessage])

  const removeMessage = useCallback(
    (id: string) => {
      setFlashMessageState((cur) => [...cur.filter((mes) => mes.id !== id)])
    },
    [setFlashMessageState],
  )

  return {
    addSuccessMessage,
    addErrorMessage,
    addInfoMessage,
    removeMessage,
  }
}
