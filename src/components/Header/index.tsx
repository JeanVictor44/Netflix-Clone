import { Container } from './style'
import logoImg from '../../assets/netflixLogo.svg'

export const Header = () => {
    return (
        <Container>
            <div>
                <img src={logoImg} />
            </div>
        </Container>
    )
}