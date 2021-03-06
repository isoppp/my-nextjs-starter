import { useClient } from '@/hooks/useClient'
import { useFlashMessageDispatcher } from '@/hooks/useFlashMessageDispatcher'
import { flashMessageState } from '@/store/flash-message'
import clsx from 'clsx'
import { FC, useCallback, useEffect, useState, VFC } from 'react'
import { createPortal } from 'react-dom'
import { useRecoilValue } from 'recoil'

const FlashMessage: FC<{ id: string; className?: string }> = ({ id, className = '', children }) => {
  const [startFadeout, setStartFadeOut] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { removeMessage } = useFlashMessageDispatcher()
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
        'transform',
        'transition-all duration-200',
        mounted && !startFadeout ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
      ])}
      onTransitionEnd={onTransitionend}
    >
      {children}
    </div>
  )
}

const FlashMessages: VFC = () => {
  const isClient = useClient()
  const messages = useRecoilValue(flashMessageState)

  if (!isClient) return <></>
  return createPortal(
    <div className="fixed right-6 bottom-6">
      {messages.map((mes) => (
        <FlashMessage id={mes.id} key={mes.id} className={'mt-4 first:mt-0'}>
          <div
            className={clsx([
              'py-2 px-6 text-white font-semibold rounded-md shadow-md',
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

export default FlashMessages
