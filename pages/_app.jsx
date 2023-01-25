import 'regenerator-runtime/runtime';
import React from 'react';
import '../styles/globals.css';
import Header from '../components/Header';
import FooterComponent from '../components/FooterComponent';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}
