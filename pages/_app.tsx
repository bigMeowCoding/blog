import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/common.scss";
import Head from "next/head";
import React from "react";
import './index.scss'
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
