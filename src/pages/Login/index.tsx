import { Header } from '../../components/Header'
import { FormBox } from '../../components/FormBox'
import { Background, Container } from './style'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { USER_KEY } from '../../constants'
import { User } from '../../common/types'
import { ReactNotifications, Store} from 'react-notifications-component'

export const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const verifyLogin = () => {
        const userStorage = localStorage.getItem(USER_KEY) as string
        const user:User = JSON.parse(userStorage)

        const isSameEmail = user.email === email
        const isSamePassword = user.password === password
        if(isSameEmail && isSamePassword){
            //Aqui vai o setState para indicar que o usuário está logado e permitir que ele vá direto para A página browse
            Store.addNotification({
                title:'Login realizado com sucesso',
                type:'success',
                container:'top-right',
                dismiss:{
                    duration:2000,
                    onScreen:true
                }
            })
        }else if(isSameEmail && isSamePassword === false){
            // emitir a notificação de que a senha está incorreta
            Store.addNotification({
                title:'Senha incorreta',
                message:'Tente outra senha',
                type:'danger',
                container:'top-right',
                dismiss:{
                    duration:2000,
                    onScreen:true
                }
            })
        }else{
            // emitir a notificação de conta inexistente
            Store.addNotification({
                title:'Conta inválida',
                message:'Verifique os dados informados',
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
                <button type="submit" onClick={verifyLogin}>Entrar</button>
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