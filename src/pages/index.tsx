import { NextPage } from 'next'

import { useFlashMessageActions } from '@/store/flashMessage/hooks'

const IndexPage: NextPage = () => {
  const { addSuccessMessage, addErrorMessage } = useFlashMessageActions()
  return (
    <div>
      <h1 className="mb-[10px]">Home</h1>
      <div className="flex">
        <div className="ml-4 first:ml-0">
          <button onClick={() => addSuccessMessage?.('Success!')}>Add Message</button>
        </div>
        <div className="ml-4 first:ml-0">
          <button onClick={() => addErrorMessage?.('Error!')}>Add Error</button>
        </div>
      </div>
    </div>
  )
}
export default IndexPage
