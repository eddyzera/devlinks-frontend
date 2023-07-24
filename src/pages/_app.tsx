import type { AppProps } from 'next/app'
import { Instrument_Sans } from 'next/font/google'
import '@/styles/globals.css'

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={instrumentSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
