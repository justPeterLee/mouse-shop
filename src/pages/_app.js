import '@/styles/globals.css'
import NavBar from 'component/NavBar/NavBar'

export default function App({ Component, pageProps }) {
  return <NavBar><Component {...pageProps} /></NavBar>
}
