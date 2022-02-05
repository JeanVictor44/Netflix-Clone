import { Header } from '../../components/Header'
import { FormBox } from '../../components/FormBox'
import { Background} from './style'
import { Link } from 'react-router-dom'

export const Register = () => {
    return (
        <>
            <Header /> 
            <Background />
            <FormBox>
                <h1>Registrar</h1>
                <input type="email" placeholder="Email ou número de telefone"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirme a senha"/>
                <button type="submit">Registrar</button>
                <div>
                    <label>
                        <input type="checkbox" />
                        Lembre-se de mim
                    </label>
                    <Link to="/">Precisa de ajuda?</Link>
                </div>
                <span>Já tem uma conta? <Link to="/register">Entre agora</Link>.</span>
                
            </FormBox>
            
        </>
        
        
    )
}