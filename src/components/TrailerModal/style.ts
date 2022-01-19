import styled from 'styled-components'

interface ContainerModalProps {
    showModal:boolean
}
export const ContainerModal = styled.div<ContainerModalProps>`
    width:100%;
    height:100%;
    position:fixed;
    background-color:rgba(0,0,0,0.6);
    z-index:100;
    display:${(props) => props.showModal ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
`
export const CloseModal = styled.span `
    font-size:45px;
    color:#fff;
    cursor:pointer;
    align-self:flex-start;
    margin:40px 0px 0px 40px;
`
