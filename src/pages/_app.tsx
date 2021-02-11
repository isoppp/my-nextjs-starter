import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>my-nextjs-starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <main>
        <Component {...pageProps} />
      </main>
      <AppFooter />
    </>
  )
}
