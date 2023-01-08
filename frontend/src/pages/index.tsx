import Head from 'next/head';
import Main from '../components/Main';

import * as S from '../styles/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sharenergy Home</title>
        <meta name="description" content="Challenge Sharenergy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>SHARENERGY</h1>
      </Main>
    </>
  );
};
