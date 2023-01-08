import React from 'react';
import Head from 'next/head';

import Main from '../../components/Main';

const Cats = () => {
    return (
        <>
            <Head>
                <title>Sharenergy Cats</title>
                <meta name="description" content="Challenge Sharenergy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>Http Cats</Main>
        </>
    );
};

export default Cats;
