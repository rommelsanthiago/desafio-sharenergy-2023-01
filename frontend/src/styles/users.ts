import styled from 'styled-components';

export const Title = styled.h2`
    padding: 1em;

    a {
        color: #00A2A2;
    }
`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const ButtonNext = styled.button`
    font-size: 1.5em;
    float: right;
    margin: 0 1em 1.5em 0;
    background: none;
    border: 1px solid #00A2A2;
    color: #00A2A2;
    border-radius: 8px;
    padding: .5em;
    cursor: pointer;

    &: hover {
        background: #525252;
    }

    @media (max-width: 520px) {
        width: 85%;
        float: none;
        margin-top: 1em;
        margin-left: 1.2em;
    }
`
