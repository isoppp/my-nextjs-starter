import '@/styles/global.css'
import 'dayjs/locale/ja'

import dayjs from 'dayjs'
import { AppType } from 'next/app'
import Head from 'next/head'

import { AppProviders } from '@/components/functions/providers/AppProviders'
import { AppFooter } from '@/components/global/AppFooter/AppFooter'
import { AppHeader } from '@/components/global/AppHeader/AppHeader'
import { FlashMessages } from '@/components/global/FlashMessages/FlashMessages'
import { env } from '@/env.mjs'
import { trpc } from '@/lib/trpc'
dayjs.locale('ja')

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <AppProviders>
      <Head>
        <title>my-nextjs-starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <main>
        <input type="hidden" value={env.NEXT_PUBLIC_BUILD_ID} name="build-id" />
        <Component {...pageProps} />
      </main>
      <AppFooter />
      <FlashMessages />
    </AppProviders>
  )
}

export default trpc.withTRPC(MyApp)
