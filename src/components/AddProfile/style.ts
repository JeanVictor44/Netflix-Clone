import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor:pointer;
    transition: .2s;
    &:hover {
        filter:brightness(0.8);
    }
    img {
        width:40px;
    }
    span {
        color:#FFF;
    }
`
export const Circle  = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width:80px;
    height:80px;
    border-radius:50%;
    background-color:#FFF;
    align-self: center;
    margin-bottom:30px;
    
`
