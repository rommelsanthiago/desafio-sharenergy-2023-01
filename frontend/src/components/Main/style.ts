import styled from "styled-components";

export const Main = styled.main`
    width: 80%;
    max-height: 90vh;
    min-height: 90vh;
    float: right;
    overflow-y: scroll;
    background-color: #000;
    background-image: url(https://www.transparenttextures.com/patterns/3px-tile.png);
    
    ::-webkit-scrollbar {
        width: 7px;
    }
      
    ::-webkit-scrollbar-track {
        background: #383838;
    }
      
    ::-webkit-scrollbar-thumb {
        background: #00A2A2;
        border-radius: 999px;
    }
`