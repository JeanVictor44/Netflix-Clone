import { Header } from '../../components/Header'
import { FormBox } from '../../components/FormBox'
import { Background, Container } from './style'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { USER_DATA_KEY, USER_KEY } from '../../constants'
import { User, UserData } from '../../common/types'
import { ReactNotifications, Store} from 'react-notifications-component'

export const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ isEmailInvalid, setIsEmailInvalid ] = useState(true)
    const navigate = useNavigate()

    const login = (event:MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const userCredentialsStorage = JSON.parse(localStorage.getItem(USER_KEY) as string) as User
        const userDataStorage = JSON.parse(localStorage.getItem(USER_DATA_KEY) as string) as UserData
        
        const isCorrectCredentials = userCredentialsStorage?.email === email && userCredentialsStorage?.password === password 
        const haveProfile = Boolean(userDataStorage?.profiles)

        if(isCorrectCredentials && haveProfile){
            navigate('/profiles')
        }else if(isCorrectCredentials && haveProfile === false){
            navigate('/createprofile')
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

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        if(email.length === 0){
            setIsEmailInvalid(true)
        }else {
            setIsEmailInvalid(false)
        }
    }

    return (
        <Container>
            <Header /> 
            <Background/>
            <ReactNotifications />
            <FormBox isEmailInvalid={isEmailInvalid}>
                <h1>Entrar</h1>
                <input type="email" placeholder="Email ou número de telefone" onChange={handleEmailChange}/>
                
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