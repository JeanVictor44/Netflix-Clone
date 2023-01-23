import { Header } from '../../components/Header'
import { FormBox } from '../../components/FormBox'
import { Background, Container } from './style'
import { MouseEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { USER_DATA_KEY, USER_KEY } from '../../constants'
import { User } from '../../common/types'
import { ReactNotifications, Store} from 'react-notifications-component'

export const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const navigate = useNavigate()

    const login = (event:MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const userCredentialsStorage = JSON.parse(localStorage.getItem(USER_KEY) as string) as User
        console.log(userCredentialsStorage)
        console.log(email, password)
        const isCorrectCredentials = userCredentialsStorage?.email === email && userCredentialsStorage?.password === password 


        if(isCorrectCredentials ){
            navigate('/browse')
        }else if( isCorrectCredentials === false ){
            Store.addNotification({
                title:'Login inválido',
                message:'Verifique se a senha ou o email digitado é válido',
                type:'danger',
                container:'top-right',
                dismiss:{
                    duration:2000,
                    onScreen:true
                }
            })
        }
    }

   

    return (
        <Container>
            <Header /> 
            <Background/>
            <ReactNotifications />
            <FormBox>
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