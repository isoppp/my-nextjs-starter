import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import { DebugObserver } from '@/components/core/DebugObserver'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      {process.env.NODE_ENV === 'development' && <DebugObserver />}
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>my-nextjs-starter</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AppHeader />
        <main>
          <Component {...pageProps} />
        </main>
        <AppFooter />
      </QueryClientProvider>
    </RecoilRoot>
  )
}
