import { useSetAtom } from 'jotai'
import { useCallback } from 'react'

import { FlashMessage, flashMessagesAtom } from '@/store/flashMessage/store'

export const useFlashMessageActions = () => {
  const setFlashMessages = useSetAtom(flashMessagesAtom)

  const addMessage = useCallback(
    (message: Omit<FlashMessage, 'id'>) => {
      const id = Date.now().toString()
      setFlashMessages((messages) => [...messages, { ...message, id }])
    },
    [setFlashMessages],
  )

  const addSuccessMessage = useCallback((message: string) => addMessage({ message, type: 'success' }), [addMessage])
  const addErrorMessage = useCallback((message: string) => addMessage({ message, type: 'error' }), [addMessage])
  const addInfoMessage = useCallback((message: string) => addMessage({ message, type: 'error' }), [addMessage])

  const removeMessage = useCallback(
    (id: FlashMessage['id']) => {
      setFlashMessages((messages) => messages.filter((message) => message.id !== id))
    },
    [setFlashMessages],
  )

  return {
    addSuccessMessage,
    addErrorMessage,
    addInfoMessage,
    removeMessage,
  }
}
