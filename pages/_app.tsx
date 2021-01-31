import { AppProps } from "next/app";

import "antd/dist/antd.css";
import "tailwindcss/tailwind.css";
import "@styles/common.scss";
import Head from "next/head";
import React from "react";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>老喵blog</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
