import clsx from 'clsx'
import { useAtomValue } from 'jotai'
import { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { useClient } from '@/hooks/useClient'
import { useFlashMessageActions } from '@/store/flashMessage/hooks'
import { flashMessagesAtom } from '@/store/flashMessage/store'

const FlashMessage: FC<{ id: string; className?: string; children: ReactNode }> = ({
  id,
  className = '',
  children,
}) => {
  const [startFadeout, setStartFadeOut] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { removeMessage } = useFlashMessageActions()
  const onTransitionend = useCallback(() => {
    if (startFadeout) removeMessage(id)
  }, [id, removeMessage, startFadeout])

  useEffect(() => {
    setMounted(true)
    setTimeout(() => {
      setStartFadeOut(true)
    }, 4000)
  }, [])

  return (
    <div
      className={clsx([
        className,
        '',
        'transition-all duration-200',
        mounted && !startFadeout ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
      ])}
      onTransitionEnd={onTransitionend}
    >
      {children}
    </div>
  )
}

export const FlashMessages: FC = () => {
  const isClient = useClient()
  const items = useAtomValue(flashMessagesAtom)

  if (!isClient) return <></>
  return createPortal(
    <div className="fixed bottom-6 right-6">
      {items.map((mes) => (
        <FlashMessage id={mes.id} key={mes.id} className={'mt-4 first:mt-0'}>
          <div
            className={clsx([
              'rounded-md px-6 py-2 font-semibold text-white shadow-md',
              'transition-all duration-200',
              mes.type === 'success' && 'bg-green-500',
              mes.type === 'error' && 'bg-red-500',
            ])}
          >
            {mes.message}
          </div>
        </FlashMessage>
      ))}
    </div>,

    window.document.body,
  )
}
