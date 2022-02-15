import { Header } from '../../components/Header'
import { FormBox } from '../../components/FormBox'
import { Background} from './style'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { USER_KEY } from '../../constants'
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications, Store} from 'react-notifications-component'

export const Register = () => {
    const [ email, setEmail ] = useState('') 
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation] = useState('')

    
    // Ter um contador guardado no localstorage para a quantidade de usuários
    const register = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()

        if(!email || !password || !passwordConfirmation){
            Store.addNotification({
                title:'Preencha todos os campos',
                message:'Para realizar o registro preencha todos os campos',
                type:'danger',
                container:'top-right',
                dismiss:{
                    duration:2000,
                    onScreen:true
                }
            })
        }else if(passwordConfirmation === password){
            //Direcionar para página de login
            const userRegister = JSON.stringify({
                email,
                password
            })
            
            Store.addNotification({
                title:'Registro realizado com sucesso',
                message:'Seu Registro foi realizado com sucesso',
                type:'success',
                container:'top-right',
                dismiss:{
                    duration:2000,
                    onScreen:true
                }
            })

            localStorage.setItem( USER_KEY,userRegister)
        }else {
            Store.addNotification({
                title:'Senhas não coincidem',
                message:'As senhas devem coincidir para prosseguir com o registro',
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
        <>
            <Header /> 
            <Background />
            <ReactNotifications />
            <FormBox >
                <h1>Registrar</h1>
                <input type="email" placeholder="Email ou número de telefone" onChange={(ev) => setEmail(ev.target.value)}/>
                <input type="password" placeholder="Senha" onChange={(ev) => setPassword(ev.target.value)}/>
                <input type="password" placeholder="Confirme a senha" onChange={(ev) => setPasswordConfirmation(ev.target.value)}/>
                <button type="submit" onClick={register} >Registrar</button>
                <div>
                    <label>
                        <input type="checkbox" />
                        Lembre-se de mim
                    </label>
                    <Link to="/">Precisa de ajuda?</Link>
                </div>
                <span>Já tem uma conta? <Link to="/login">Entre agora</Link>.</span>
                
            </FormBox>
            
        </>
        
        
    )
}