import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }

    :root {
        font-size: 62.5%;
        font-family: 'Inter', sans-serif;
        font-family: 'Inter', 700;
    }

    body {
        font-size: 1.6rem;
    }

    ::-webkit-scrollbar {
        width: 1.3rem;
    }

    ::-webkit-scrollbar-track {
        background: #000A; 
    }

    ::-webkit-scrollbar-thumb {
        border-radius: .8rem;
        background: #BBB; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #DDD;
    }
`