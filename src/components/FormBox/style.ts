import styled from "styled-components";

interface ContainerProps {
    isEmailInvalid? : boolean;
}

export const Container =  styled.form<ContainerProps>`
    @media (max-width:700px) {  
            z-index:-1;
            padding: 100px 20px 40px;
            max-width:100%;
            height:100vh;
            background-color:#000;

            left:0;
            top:0;
            transform:translate(0,-0);
    }
    user-select:none;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:100%;
    max-width:450px;
    background-color: rgba(0,0,0,0.7);
    color:#FFF;
    padding: 60px 68px 40px;
    h1 {
        margin-bottom:25px;
    }
    input:not(input[type="checkbox"]){
        background:#333333;
        font-size:16px;
        width:100%;
        height:50px;
        border-radius:4px;
        & + input {
            margin-top:30px;
        }
        padding-left:15px;
        border:1px solid ${({isEmailInvalid}) => (isEmailInvalid ? "#E87C03" : "transparent")};
        outline:none;
        color:#fff;
    }
    input[type='checkbox'] {
        margin-right:4px;
    }
    label {
        user-select:none;
        
    }
    button {
        background:#E50914;
        border:none;
        width:100%;
        margin:40px 0px 10px 0px;
        
        border-radius:4px;
        color:#FFF;
        font-size:16px;
        font-weight:700;
        padding:16px;
        transition:background-color .2s;
        &:hover {
            filter:brightness(0.9);
        }
        cursor:pointer;
    }
    
    div {
        display:flex;
        justify-content: space-between;
        color:#B3B3B3;
        font-size:13px;
        a {
            color:#B3B3B3;
           &:hover {
               text-decoration:underline;
           }
        }
    }
    span {
        display:block;
        margin-top:20px;
        color:#B3B3B3;
        a {
            color:#FFF;
        }
    }
`