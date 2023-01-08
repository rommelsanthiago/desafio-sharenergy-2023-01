import { AppProps } from 'next/app';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyle />
    <Header />
    <Navbar />
    <Component {...pageProps} />
  </>
};
