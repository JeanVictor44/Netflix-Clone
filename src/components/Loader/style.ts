import styled, {keyframes} from 'styled-components'

const Loader = keyframes `
    to {
        transform:rotate(360deg);
    }
`
export const ContainerLoader = styled.div `
    
    div {
        width:70px;
        height:70px;
        border-radius:50%;
        border:5px solid transparent;
        border-left-color:red;
        border-top-color:red;
        position:absolute;
        left:calc(50% - 35px);
        top:calc(50% - 35px);
        animation:${Loader} 1s linear infinite;

    }
    background-color:#111;
`