import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import store from "@/store/index";

import "@/styles/globals.scss";
// import "@/components/button.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kinect Portal</title>
      </Head>
      <Provider store={store}>
        {/* <SessionProvider> */}
        <Component {...pageProps} />
        {/* </SessionProvider> */}
      </Provider>
    </>
  );
}
