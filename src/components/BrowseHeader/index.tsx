import {useState, useEffect} from 'react'
import {BarsContainer, Container, Navigation} from './style' 
import logoImg from '../../assets/netflixLogo.svg'

const Header = () => {
    const [haveBackground, setBackground] = useState(false) 
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    useEffect(() => {   
        const watchScroll = () => {
            if(window.scrollY > 170) {
                setBackground(true)
            }else {
                setBackground(false)
            }
        }
        window.addEventListener('scroll',watchScroll)
    })

    function switchOpenMenu(){
        setIsOpenMenu((oldIsOpenMenu) => oldIsOpenMenu ? false : true )
    }
    return (
        <Container background={haveBackground}>
            <div>

                <div>
                    <img src={logoImg} alt="Netflix Logo" />
                </div>

                <Navigation isOpenMenu={isOpenMenu}>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Séries</a></li>
                        <li><a href="#">Filmes</a></li>
                        <li><a href="#">Minha Lista</a></li>
                    </ul>
                </Navigation>

            </div>

            <BarsContainer onClick={switchOpenMenu  }>
                <div></div>
                <div></div>
                <div></div> 
            </BarsContainer>
            <div>
                <input type="text" placeholder="Buscar"/>
            </div>
        </Container>
    )
}

export default Header