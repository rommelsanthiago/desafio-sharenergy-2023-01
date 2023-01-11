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
    }

    body {
        min-height: 100vh;
    }
`;
