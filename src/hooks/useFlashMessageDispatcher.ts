import { FlashMessage, flashMessageStoreActions } from '@/store/flash-message'
import { useCallback } from 'react'

type Dispatcher = {
  addSuccessMessage(message: string): void
  addErrorMessage(message: string): void
  addInfoMessage(message: string): void
  removeMessage(id: string): void
}

export const useFlashMessageDispatcher = (): Dispatcher => {
  const addMessage = useCallback((message: Omit<FlashMessage, 'id'>) => {
    const id = Date.now().toString()
    flashMessageStoreActions.addMessage({ ...message, id })
  }, [])

  const addSuccessMessage = useCallback((message: string) => addMessage({ message, type: 'success' }), [addMessage])
  const addErrorMessage = useCallback((message: string) => addMessage({ message, type: 'error' }), [addMessage])
  const addInfoMessage = useCallback((message: string) => addMessage({ message, type: 'error' }), [addMessage])

  const removeMessage = useCallback((id: string) => {
    flashMessageStoreActions.removeMessage(id)
  }, [])

  return {
    addSuccessMessage,
    addErrorMessage,
    addInfoMessage,
    removeMessage,
  }
}
