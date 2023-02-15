import '../styles/globals.scss'
import { Montserrat } from '@next/font/google'
import Link from 'next/link'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ClientOnly from '../components/ClientOnly'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})
export default function App({ Component, pageProps }) {
  
  return (
    <main className={montserrat.className}>
      <ClientOnly>
      <Layout/>
      <Component {...pageProps}/>
      </ClientOnly>
      </main>
  )
  
}
