import { useFlashMessageDispatcher } from '@/hooks/useFlashMessageDispatcher'

export default function Home(): JSX.Element {
  const { addSuccessMessage, addErrorMessage } = useFlashMessageDispatcher()
  return (
    <div>
      <h1 className="mb-[10px]">Home</h1>
      <div className="flex">
        <div className="ml-4 first:ml-0">
          <button onClick={() => addSuccessMessage('Success!')}>Add Message</button>
        </div>
        <div className="ml-4 first:ml-0">
          <button onClick={() => addErrorMessage('Error!')}>Add Error</button>
        </div>
      </div>
    </div>
  )
}
