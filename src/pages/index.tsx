import { useFlashMessageDispatcher } from '@/hooks/useFlashMessageDispatcher'
import { NextPage } from 'next'
import { Button } from '@chakra-ui/react'
const IndexPage: NextPage = () => {
  const { addSuccessMessage, addErrorMessage } = useFlashMessageDispatcher()
  return (
    <div>
      <h1>Home</h1>
      <div className="flex gap-4">
        <Button onClick={() => addSuccessMessage('Success!')}>Add Message</Button>
        <Button onClick={() => addErrorMessage('Error!')}>Add Error</Button>
      </div>
    </div>
  )
}
export default IndexPage
