import styled from 'styled-components'

export const FiltersContainer = styled.form`
    width: 70%;
    display: flex;
    margin: 0 auto;
    padding: 20px 0;

    div {
        width: 0;
        position: relative;
    }

    svg {
        fill: #00a2a2;
        position: absolute;
        right: 1em;
    }
    @media (max-width: 720px) {
        color: whitesmoke;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 2em;
    color: #00a2a2;
    font-weight: bold;
    font-size: 1em;
    padding: 0 1em;
    border-radius: 8px;
`
