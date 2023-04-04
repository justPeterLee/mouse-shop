import "@/styles/globals.css";
import "@/styles/loginForum.css";

import Footer from "@/component/Footer/Footer";
import NavBar from "@/component/NavBar/NavBar";
import StaticNavBar from "@/component/NavBar/StaticNavBar";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import store from "@/redux/store/store";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <NavBar>
          <StaticNavBar>
            <Component {...pageProps} />
            <Footer />
          </StaticNavBar>
        </NavBar>
      </Provider>
    </SessionProvider>
  );
}
