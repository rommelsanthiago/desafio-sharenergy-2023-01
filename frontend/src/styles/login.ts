import styled from "styled-components";

import { OutlinedInput } from '@mui/material';

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/reactcrud-95957.appspot.com/o/images%2FDesign-sem-nome-91.jpg?alt=media&token=66c8acb7-a121-4786-9bd7-87410e03a1ef);
    background-size: cover;
    background-position: center;

    img {
        padding-top: 5em; 
        
        @media (max-width: 520px) {
            width: 90%;
        }
    }
`

export const Form = styled.form`
    width: 35%;
    max-width: 500px;
    min-width: 500px;
    min-height: 30%;
    margin-top: 4em;
    background: rgba(0, 0, 0, 0.43);
    box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 75%);

    h2 {
        text-align: center;
        margin: 1em 0;
    }

    div {
        width: 95%;
        display: flex;
        padding: 1em;

        
    }

    section {
        width: 74%;
        display: flex;
        align-items: center;
        font-size: 1.2em;

        input {
            margin-right: .5em;
        }
    }

    fieldset {
        background-color: #ffffff47;
    }

    @media (max-width: 520px) {
        min-width: 340px;
    }
`

export const Input = styled(OutlinedInput)`
    width: 70%;
    max-height: 1em;
    border: none;
    border-radius: 0 4px 4px 0;
    color: #00A2A2;
    font-weight: bold;
    font-size: 1em;
    padding: 0 1em;

    input {
        width: 80%;
    }

    div {
        width: 0;
        padding: 0;
    }

    svg {
        position: absolute;
        right: -1.5em;

        @media (max-width: 520px) {
            right: -0.5em;
        }
    }
`

export const Button = styled.button`
    width: 20%;
    height: 2em;
    background-color: #00A2A2;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &: hover {
        background-color: #fff;
        color: #00A2A2;
    }
`

export const Span = styled.span`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    position: relative;
    background: #00A2A2;
    border-radius: 4px 0 0 4px;

    &: after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        right: -8px;
        border-top: 10px solid rgba(0,0,0,0);
        border-left: 8px solid #00A2A2;
        border-bottom: 10px solid rgba(0,0,0,0);
        top: 7px;
        z-index: 9;
    }
`