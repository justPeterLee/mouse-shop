import "@/styles/globals.css";
import "@/styles/loginForum.css";

import Footer from "@/component/Footer/Footer";
import NavBar from "@/component/NavBar/NavBar";
import StaticNavBar from "@/component/NavBar/StaticNavBar";
import Cart from "@/component/Cart/Cart";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { useState } from "react";

import store from "@/redux/store/store";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [cartState, setCartState] = useState(true);
  const bringCartState = (data) => {
    setCartState(data);
  };

  const bringCartStateFalse = (data) => {
    setCartState(data);
  }; 
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Cart bringCartState={bringCartState} />
        <div style={cartState ? {} : { overflow: "hidden", height: "100vh" }}>
          <NavBar bringCartState={bringCartStateFalse}>
            <StaticNavBar bringCartState={bringCartStateFalse}>
              <Component {...pageProps} />
              <Footer />
            </StaticNavBar>
          </NavBar>
        </div>
      </Provider>
    </SessionProvider>
  );
}
