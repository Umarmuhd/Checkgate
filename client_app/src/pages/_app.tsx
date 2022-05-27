import '../styles/globals.css';

import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

import { AuthProvider } from 'src/context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'next-themes';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
