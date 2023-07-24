import type { AppProps } from 'next/app'
import { Instrument_Sans as InstrumentSans } from 'next/font/google'
import '@/styles/globals.css'

const instrumentSans = InstrumentSans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={instrumentSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
