import 'regenerator-runtime/runtime';
import React from 'react';
import '../styles/globals.css';
import Header from '../components/Header';
import FooterComponent from '../components/FooterComponent';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}
