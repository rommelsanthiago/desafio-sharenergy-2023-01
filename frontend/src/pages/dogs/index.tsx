import Head from 'next/head';
import React from 'react';

import Main from '../../components/Main';

const Dogs = () => {
    return (
        <>
            <Head>
                <title>Sharenergy Dogs</title>
                <meta name="description" content="Challenge Sharenergy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>Doguinhos</Main>
        </>
    );
};

export default Dogs;
