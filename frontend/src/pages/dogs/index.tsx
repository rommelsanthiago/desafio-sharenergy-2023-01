import Head from 'next/head';
import React from 'react';

import Main from '../../components/Main';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useProtectedPage } from '../../hooks/useProtectedPages';

const Dogs = () => {
    useProtectedPage();
    return (
        <>
            <Head>
                <title>Sharenergy Dogs</title>
                <meta name="description" content="Challenge Sharenergy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Navbar />
            <Main>Doguinhos</Main>
        </>
    );
};

export default Dogs;
