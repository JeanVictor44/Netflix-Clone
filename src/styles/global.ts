import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin:0;
        padding:0;
       
    }
    html {
        scroll-behavior:smooth;
        user-select:none;

        &::-webkit-scrollbar{
            width:15px;
            background-color:#222;
        }
        &::-webkit-scrollbar-track{
            background-color:#222;
        }
        ::-webkit-scrollbar-thumb{
            background-color:#111;
            border-radius: 10px;
        }

    }
    body {
        background-color:#111;
        font-family: 'Roboto', sans-serif;
        
    }
    img {
        width:100%;
    }
    ul {
        list-style-type:none;
    }
    a {
        text-decoration:none;
    }
    
`