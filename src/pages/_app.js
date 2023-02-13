import '@/styles/globals.css'
import NavBar from 'component/NavBar/NavBar'
import StaticNavBar from 'component/NavBar/StaticNavBar'
export default function App({ Component, pageProps }) {
  return <NavBar><StaticNavBar><Component {...pageProps} /></StaticNavBar></NavBar>
}
