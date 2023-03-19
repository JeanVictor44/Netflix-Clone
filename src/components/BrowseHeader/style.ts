import styled from 'styled-components'

interface ContainerProps {
    background:boolean
}

export const BarsContainer = styled.div `
    cursor: pointer;
    display: none;
    position: absolute;
    right: 30px;
    

    div {
        height:5px;
        width: 35px;
        background-color: #fff;
        border-radius:5px;
    }
    @media (max-width:650px) {
        display: flex;
        flex-direction: column;
        gap:5px;
    }
    
`

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
interface NavigationProps {
    isOpenMenu: boolean
}
export const Navigation = styled.nav<NavigationProps>`
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

    transition: .2s ease-in-out;
    
    @media (max-width: 650px) {
        position: absolute;
        right: ${({isOpenMenu}) =>  isOpenMenu ? '0%' : '-100%'};
        height: 100%;
        width: 50%;
        ul {
            background-color: #000;
            flex-direction: column;
            justify-content: center;
            gap:40px;
            height: 100vh;
            
            li {
                margin: 0;
                text-align: center;
            }
        
        }
        
    }
`