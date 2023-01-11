import React from 'react';
import Head from 'next/head';

import Main from '../../components/Main';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useProtectedPage } from '../../hooks/useProtectedPages';

const Cats = () => {
    useProtectedPage();
    return (
        <>
            <Head>
                <title>Sharenergy Cats</title>
                <meta name="description" content="Challenge Sharenergy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Navbar />
            <Main>Http Cats</Main>
        </>
    );
};

export default Cats;
