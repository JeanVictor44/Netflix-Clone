import styled from 'styled-components'


export const MoveListToLeft = styled.div `
    position:absolute;
    left:0;
    height:270px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,0.6);
    width:40px;
    z-index:5;
    cursor:pointer;  
    transition:all .5s;
    opacity:0;
`
export const MoveListToRight = styled(MoveListToLeft) `
    left:auto;
    right:0;
`
export const ContainerList = styled.div `
    h1 {
        margin:20px 0px;
        font-size:21px;
    }
    
    color:#fff;
    margin:0px 0px 20px 20px;
    
    /* 
        ! MoveListToRight inherits the styles of MoveListToLeft, a modification in the hover below also occurs in
        ! moveListToRight 
    */
    &:hover ${MoveListToLeft} {
        opacity:1;
    }

`
interface ContainerMoviesProps {
    scrollX:number
    width:number;
}
export const ContainerMovies = styled.div<ContainerMoviesProps>`
    display:flex;
    overflow:hidden;
    padding:15px 0px;
    transition:all ease .5s;
    margin-left:${props => props.scrollX}px;
    div {
        flex:1 0 180px;
        transition:all .2s ;
        overflow:hidden;


    }
    div:hover {
        cursor:pointer;
        transform:scale(1.1);
    }

    div + div {
        margin-left:20px;
    }

    
`