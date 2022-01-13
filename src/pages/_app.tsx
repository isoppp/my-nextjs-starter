import '@/css/global.css'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : <Component {...pageProps} />}</div>
}
