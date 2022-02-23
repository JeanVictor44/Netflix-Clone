import { Header } from '../../components/Header'
import { FormBox } from '../../components/FormBox'
import { Background, Container } from './style'
import { MouseEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { USER_KEY } from '../../constants'
import { User } from '../../common/types'
import { useAuth } from '../../context/Auth'

export const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()
    const { signIn } = useAuth()

    const login = (event:MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const { email: emailStorage, password: passwordStorage } = JSON.parse( localStorage.getItem(USER_KEY) as string ) as User
        if(emailStorage === email && passwordStorage === password){
            navigate('/createprofile')
        }
    }

    return (
        <Container>
            <Header /> 
            <Background/>
            <FormBox >
                <h1>Entrar</h1>
                <input type="email" placeholder="Email ou número de telefone" onChange={(ev) => setEmail(ev.target.value)}/>
                <input type= "password" placeholder="Senha" onChange={(ev) => setPassword(ev.target.value)}/>
                <button type="submit" onClick={login}>
                   Entrar
                </button>
                <div>
                    <label>
                        <input type="checkbox" />
                        Lembre-se de mim
                    </label>
                    <a href="/">Precisa de ajuda?</a>
                </div>
                <span>Novo por aqui? <Link to="/register">Registre-se agora</Link>.</span>
                
            </FormBox>
            
        </Container>
        
        
    )
}