import "@/styles/globals.css";
import '@/styles/loginForum.css'

import Footer from "@/component/Footer/Footer";
import NavBar from "@/component/NavBar/NavBar";
import StaticNavBar from "@/component/NavBar/StaticNavBar";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session} >
      <NavBar>
        <StaticNavBar>
          <Component {...pageProps} />
          <Footer />
        </StaticNavBar>
      </NavBar>
    </SessionProvider>
  );
}
