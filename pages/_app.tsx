import { AppProps } from "next/app";

import "antd/dist/antd.css";
import "@styles/pages/common.scss";
import Head from "next/head";
import React from "react";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>exercise</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
