import axios from 'axios';
import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import { useProtectedPage } from '../hooks/useProtectedPages';

import * as S from '../styles/index'

export default function Home() {
  useProtectedPage();
  return (
    <>
      <Head>
        <title>Sharenergy Home</title>
        <meta name="description" content="Challenge Sharenergy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Main>
        <h2>
          Bem-vindo à nossa página de usuários! Aqui, você pode visualizar uma lista de usuários gerados aleatoriamente pela API 
          <a href="https://randomuser.me/" target="_blank" rel="noopener noreferrer">Random User Generator</a>.
        </h2>
      </Main>
    </>
  );
};
