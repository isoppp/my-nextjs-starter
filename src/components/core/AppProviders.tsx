import { ChakraProvider } from '@chakra-ui/react'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

const AppProviders: FC = ({ children }) => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS={true}>{children}</ChakraProvider>
    </QueryClientProvider>
  </RecoilRoot>
)

export default AppProviders
