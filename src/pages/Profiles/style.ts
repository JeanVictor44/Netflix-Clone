import styled from "styled-components";

export const Container = styled.div `
    h1 {
        color:#FFF;
        position:absolute;
        width:100%;
        text-align:center;
        top:20%;
    }
    & > div {
        position:absolute;
        width:100%;
        left:50%;
        top:30%;
        transform: translate(-50%);
    }
`

export const ProfilesContainer = styled.div `
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    gap:40px;
`
export const ManageProfilesButton = styled.button `
    color:#B3B3B3B3;
    border:1px solid #B3B3B3;
    background-color:transparent;
    padding:5px 25px;
    cursor:pointer;
    transition: .2s;
    &:hover {
        filter:brightness(0.8);
    }
    display:block;
    margin:50px auto 0px auto;
    font-size:14px;
    text-transform:uppercase;
`