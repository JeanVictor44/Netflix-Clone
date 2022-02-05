import { Container, Circle } from "./style"
import plusImg from '../../assets/plus.svg'

export const AddProfile = () => {
  return (
    <Container>
        <Circle>
            <img src={plusImg} />
        </Circle>
        <span>Adicionar perfil</span>
    </Container>   
  )
}
