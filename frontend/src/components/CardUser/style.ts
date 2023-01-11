import styled from 'styled-components';

export const Container = styled.section`
    width: 20%;
    min-width: 22em;
    min-height: 15em;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em;
    padding: 1em;
    border-radius: 8px;
    background-color: #141414c2;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 
        0px 1px 1px 0px rgb(0 0 0 / 14%), 
        0px 1px 3px 0px rgb(0 0 0 / 12%);

    h3 {
        display: flex;
        align-items: center;
        margin-top: 3em;

        svg {
            margin-right: .5em;
        }
    }
`

export const Profile = styled.div`
    position: relative;

    img {
        border-radius: 50%;
        border: 2px solid #00a2a2;
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 
        0px 4px 5px 0px rgb(0 0 0 / 14%), 
        0px 1px 10px 0px rgb(0 0 0 / 12%);
    }

    span {
        min-width: 1.5em;
        min-height: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0em;
        bottom: 0.1em;
        border: 2px solid #00a2a2;
        font-size: 1.125em;
        border-radius: 50%;
        background-color: rgb(0,113,113);
    }
`