import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import AppProviders from '@/components/core/AppProviders'
import { DebugObserver } from '@/components/core/DebugObserver'
import FlashMessages from '@/components/shared/FlashMessages'
import '@/css/global.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProviders>
      {process.env.NODE_ENV === 'development' && <DebugObserver />}
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
    </AppProviders>
  )
}
