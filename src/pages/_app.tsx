import '@/css/global.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import AppProviders from '@/components/core/AppProviders'
import FlashMessages from '@/components/shared/FlashMessages'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProviders>
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
