import '../styles/globals.css';

import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
