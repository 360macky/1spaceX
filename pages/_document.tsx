import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png" />
      <meta
        name="theme-color"
        content="#000000"
        media="(prefers-color-scheme: dark)"
      />
      <meta
        name="theme-color"
        content="#ffffff"
        media="(prefers-color-scheme: light)"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
