import { useFlashMessageDispatcher } from '@/hooks/useFlashMessageDispatcher'
import { NextPage } from 'next'
const IndexPage: NextPage = () => {
  const { addSuccessMessage, addErrorMessage } = useFlashMessageDispatcher()
  return (
    <div>
      <h1>Home</h1>
      <div className="flex gap-4">
        <button onClick={() => addSuccessMessage('Success!')}>Add Message</button>
        <button onClick={() => addErrorMessage('Error!')}>Add Error</button>
      </div>
    </div>
  )
}
export default IndexPage
