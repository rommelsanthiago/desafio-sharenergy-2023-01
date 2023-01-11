import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';

import * as S from '../../styles/users'
import Main from "../../components/Main";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CardUser from '../../components/CardUser';
import { IRandomUserResponse } from '../../types/user';
import { useProtectedPage } from "../../hooks/useProtectedPages";
import { SearchUser } from '../../components/Search'
import { useRouter } from 'next/router';

export default function Users({ results, info }: IRandomUserResponse) {
    const [text, setText] = useState('')
    useProtectedPage();
    const nextPage = info.page;
    const users = results;
    const router = useRouter();

    const updateText = (e: any) => {
        setText(e.target.value)
    }

    const searchText = (e: any) => {
        e.preventDefault()
        const newText = text
        setText(newText)
    }

    return (
        <>
            <Head>
                <title>Sharenergy User</title>
                <meta name="description" content="Challenge Sharenergy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Navbar />
            <Main>
                <S.Title>
                    Bem-vindo à página de usuários! Aqui, você pode visualizar uma lista de usuários gerados aleatoriamente pela API
                    <a href="https://randomuser.me/" target="_blank" rel="noopener noreferrer"> Random User Generator</a>.
                </S.Title>
                <SearchUser
                    text={text}
                    updateText={updateText}
                    searchText={searchText}
                />
                <S.Content>
                    {users.filter((user) => {
                        return user.email.toLowerCase().includes(text.toLowerCase()) ||
                        user.login.username.toLowerCase().includes(text.toLowerCase()) ||
                        user.name.first.toLowerCase().includes(text.toLowerCase())
                    }).map((user) => (
                        <CardUser key={user.login.uuid} user={user} />
                    ))}
                </S.Content>
                <S.ButtonNext onClick={() => router.push(`/users/${nextPage + 1}`)}>
                    Next Page
                </S.ButtonNext>
            </Main>
        </>
    );
};

export const getStaticProps = async (context: { params: any; }) => {
    const { params } = context;
    const response = await axios(`https://randomuser.me/api?results=10&page=${params.page}`);
    const data = await response.data;

    const results = data.results;
    const info = data.info;

    return {
        props: {
            results: results,
            info: info
        },
        revalidate: 30,
    };
};

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking",
    };
};
