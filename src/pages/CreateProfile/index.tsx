import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import * as S from './style'
import { USER_DATA_KEY } from '../../constants'
import { UserData } from '../../common/types'
import { useState } from 'react'

export const CreateProfile = () => {
    const [ profileName, setProfileName ] = useState('')

    const createProfile = () => {
        const userDataStorage = JSON.parse(localStorage.getItem(USER_DATA_KEY) as string) as UserData
        
        if(userDataStorage?.profiles){
            const newUserDataStorage = {
                ...userDataStorage,
                profiles:[
                    ...userDataStorage.profiles,
                    {
                        name:profileName
                    }
                    
                ]
            } 
            localStorage.setItem(USER_DATA_KEY, JSON.stringify(newUserDataStorage))
            return
        }
        const newUserDataStorage = JSON.stringify({
            profiles: [
                {
                    name:profileName
                }
            ]
        })
        localStorage.setItem(USER_DATA_KEY, newUserDataStorage)

    }

    return (
        <S.Container>
            <Header />
            <S.Main>
                <h1>Adicionar Perfil</h1>
                <p>Adicionar um perfil para outra pessoa assistir Netflix.</p>
                
                <S.Line />
                
                <S.ProfileInfoContainer>
                    <Profile urlImage="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                    <input type="text" placeholder="Name" onChange={(ev) => setProfileName(ev.target.value)}/>
                    <label>
                        <input type="checkbox" />
                        <p>Kid?</p>
                    </label>
                    
                </S.ProfileInfoContainer>

                <S.Line />

                <S.ButtonsContainer>
                    <button onClick={createProfile}>Criar</button>
                    <button>Cancelar</button>
                </S.ButtonsContainer>
                

            </S.Main>
            
        </S.Container>
    )
}