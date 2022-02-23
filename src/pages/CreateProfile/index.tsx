import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import * as S from './style'

export const CreateProfile = () => {
    // verificar se a chave ja existe no localStorage caso exista criar outro perfil, se não, criar a chave com o novo perfil
    return (
        <S.Container>
            <Header />
            <S.Main>
                <h1>Adicionar Perfil</h1>
                <p>Adicionar um perfil para outra pessoa assistir Netflix.</p>
                
                <S.Line />
                
                <S.ProfileInfoContainer>
                    <Profile urlImage="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                    <input type="text" placeholder="Name"/>
                    <label>
                        <input type="checkbox" />
                        <p>Kid?</p>
                    </label>
                    
                </S.ProfileInfoContainer>

                <S.Line />

                <S.ButtonsContainer>
                    <button>Continar</button>
                    <button>Cancelar</button>
                </S.ButtonsContainer>
                

            </S.Main>
            
        </S.Container>
    )
}