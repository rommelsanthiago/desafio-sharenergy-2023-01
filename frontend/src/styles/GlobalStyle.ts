import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: #fff;
        font-family: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
        'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
        'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

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
    }

    body {
        min-height: 100vh;
        background-color: #181818;
        background-image: url(https://www.transparenttextures.com/patterns/3px-tile.png);

        div {
            display: grid;
            grid-template-areas:
            "header header header"
            "nav main main"
            "nav main main"
            ;
        }
    }
`;
