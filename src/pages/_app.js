import "@/styles/globals.css";
import "@/styles/loginForum.css";

import Footer from "@/component/Footer/Footer";
import NavBar from "@/component/NavBar/NavBar";
import StaticNavBar from "@/component/NavBar/StaticNavBar";
import Cart from "@/component/Cart/cartIndex/Cart";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { useState, useRef, useEffect, useCallback } from "react";

import store from "@/redux/store/store";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [cartState, setCartState] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const bringCartState = (data) => {
    setCartState(data);
  };

  const bringCartStateFalse = (data) => {
    setCartState(data);
  };

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Cart bringCartState={bringCartState} />
        <div style={cartState ? {} : { position: "fixed", top: `-${scrollY}px` }}>
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
