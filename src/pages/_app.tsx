import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import { DebugObserver } from '@/components/core/DebugObserver'
import FlashMessages from '@/components/shared/FlashMessages'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '@/css/global.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      {process.env.NODE_ENV === 'development' && <DebugObserver />}
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS={true}>
          <Head>
            <title>my-nextjs-starter</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <AppHeader />
          <main>
            <Component {...pageProps} />
          </main>
          <AppFooter />
          <FlashMessages />
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}
