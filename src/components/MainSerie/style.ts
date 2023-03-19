import styled from 'styled-components'

export const ButtonScrollDown = styled.a.attrs({href:'#moviesContainer'})`
    color: #fff;
`

interface ContainerProps {
    background:string
}

export const Container = styled.section<ContainerProps>`
    height:85vh;
    background:linear-gradient(to right, rgba(17,17,17,0.9) 20%, transparent 80%), 
    linear-gradient(to top, rgba(17,17,17,0.5) 5%, transparent 95%), url(${props => props.background}), no-repeat;
    background-position:center;
    background-size:cover;
    ${ButtonScrollDown}{
        position:absolute;
        right:0;
        top:90vh;
        margin-right:40px;
    }
    ${ButtonScrollDown} > img {
        width:30px;
    }
`  

export const DetailsContainer = styled.div `
    margin:0px 0px 80px 20px;
    height:inherit;
    position:relative;
    top:200px;

    h1 {
        font-size:48px;
        max-width:500px;
        margin-bottom:15px;
        color:#fff;
    }
    
    p:last-child {
        font-size:18px;
        color:#fff;
        
    }

    @media (max-width:650px) {
        h1 {
            font-size: 30px;
        
        }
        p:last-child {
            font-size:14px;
        }
        
    }
    
    
`
export const InfoContainer = styled.div`
    display: flex;
    margin-bottom:15px;
    p:nth-child(1){
        color:#2F8E46;
    }
    p {
        font-size:18px;
        font-weight:bold;
    }
    p + p {
        margin-left:20px;
    }
    p:nth-child(n+2) { 
        color:#fff;
    }
    @media (max-width:650px) {
        p {
            font-size:14px;
        }
    }
` 
export const ContainerButtons = styled.div `
    margin:20px 0px;

    img {
        width:15px;
        margin-right:10px;
    }
    button {
        width:180px;
        height:50px;
        font-size:18px;
        border-radius:6px;
        border:none;
        outline:none;
        cursor:pointer;
    }
    button + button {
        margin-left:10px;
        background-color:#333;
        color:#fff;
    }

    @media (max-width:650px) {
        button {
            width:140px;
            height:35px;
            font-size: 14px;
        }
        img {
            width: 12px;
        }
        
    }
`
export const Overview = styled.p `
    color:#817A70;
    max-width:500px;
    font-size:18px;
    line-height:1.4;
    @media (max-width:650px) {
        font-size:14px;
        max-width: 350px;
    }
`
