import '@/styles/global.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { AppProviders } from '@/components/functions/providers/AppProviders'
import { AppFooter } from '@/components/global/AppFooter/AppFooter'
import { AppHeader } from '@/components/global/AppHeader/AppHeader'
import { FlashMessages } from '@/components/global/FlashMessages/FlashMessages'

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
