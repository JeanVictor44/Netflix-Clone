import styled from 'styled-components'

interface ContainerProps {
    background:boolean
}

export const Container = styled.header<ContainerProps>`
    transition:all .5s;
    position:fixed;
    z-index:10;
    width:100%;
    height:85px;
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:${({background}) => background ? '#000' : 'transparent'};

    
    
    input[type="text"] {
        outline:none;
        transition:all .2s ease-out;
        height:40px;
        width:300px;
        padding:12px;
        font-size:17px;
        background-color:#d7d7d7;
        border:none;
        color:#000; 
        margin-right:20px;
        border-radius:5px;
    }
    
    
    
    div:nth-child(1) {
        display:flex;
        align-items:center;
    }
    div:nth-child(1) > div {
        width:170px;
    }

    @media (max-width:650px) {
        input[type="text"] {
            display:none;
        }
        div:nth-child(1) > div {
            width:130px;
        }
    }
`

export const Navigation = styled.nav `
    @media (max-width: 650px) {
        display: none;
        
    }
    margin-left:45px;
    ul {
        display:flex;
    }
    a {
        padding:10px;
    }
    li > a {
        color:#fff;
    }
    li + li {
        margin-left:15px;
    }
`