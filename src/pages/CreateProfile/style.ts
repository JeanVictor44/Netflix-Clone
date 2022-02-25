import styled from "styled-components";

export const Container = styled.div `
` 
export const ButtonsContainer = styled.div `
    margin-top:20px;
    display:flex;
    gap:10px;
    button:nth-child(1){
        background-color:#CD0003;
        color:#FFF;
    }
    button:nth-child(2){
        background-color:transparent;
        color:#444444;
        border: 1px solid #444444 ;
    }
    button {
        height:30px;
        padding:5px 30px;
        border:none;
        cursor:pointer;
    }
`

export const ProfileInfoContainer = styled.div `
    padding:20px 0px;
    display:flex;
    gap:10px;
    align-items:center;
    justify-content:space-between;
    label {
        display:flex;
        align-items:center;
        gap:10px;
        cursor:pointer;
        
        input[type="checkbox"] {
            -webkit-appearance: none;
            position:relative;
            width:30px;
            height:30px;
            border:1px solid #232323;
            transition: border-color .2s;
            cursor:pointer;

        }   
        input[type="checkbox"]:hover {
            border:1px solid #FFF;
        }

        input[type="checkbox"]:checked::before{
            content:'✓';
            position:absolute;
            font-size:20px;
            top:40%;
            left:50%;
            transform:translate(-50%,-50%);
            color:#FFF;
        }

        p {
            color:#FFF;
        }
    }
    
    input[type="text"] {
        width:60%;
        height:30px;
        outline:none;
        border:none;
        padding-left:10px;
        background-color:#666666;
        color:#FFF;
        ::placeholder {
            color:#C1BBB7;
        }
    }
`
export const Main = styled.main `
    width:40%;
    position:absolute;
    left:50%;
    top:30%;
    transform:translate(-50%);
    
    h1 {
        color:#FFF;
        font-size:45px;
        font-weight:600;
        letter-spacing: 1px;
    }
    p {
        color:#3D3D3D;
        margin:10px 0px 8px 0px;
    }
`
export const Line = styled.div `
    width:100%;
    height:2px;
    background-color:#1E1E1E;
`