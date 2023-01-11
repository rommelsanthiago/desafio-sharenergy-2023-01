import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header';

import Main from '../../components/Main';
import Navbar from '../../components/Navbar';
import { useProtectedPage } from '../../hooks/useProtectedPages';

const Customers = () => {
  useProtectedPage();
  return (
    <>
      <Head>
        <title>Sharenergy Clientes</title>
        <meta name="description" content="Challenge Sharenergy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Main>Clientes</Main>
    </>
  );
};

export default Customers;
