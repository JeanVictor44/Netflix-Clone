import styled from "styled-components";

export const Container = styled.div `
    cursor: pointer;
    transition:.2s;
    &:hover {
        filter:brightness(0.8);
    }
    img {
        max-width:110px;
        display:block;
        margin-bottom:10px;
    }
    
    span {
        display:block;
        text-align:center;
        color:#FFF;
    }
`