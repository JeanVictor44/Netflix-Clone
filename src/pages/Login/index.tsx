import { Header } from '../../components/Header'
import { FormBox } from '../../components/FormBox'
import { Background, Container } from './style'

export const Login = () => {
    return (
        <Container>
            <Header /> 
            <Background/>
            <FormBox>
                <h1>Entrar</h1>
                <input type="email" placeholder="Email ou número de telefone"/>
                <input type= "password" placeholder="Senha"/>
                <button type="submit">Entrar</button>
                <div>
                    <label>
                        <input type="checkbox" />
                        Lembre-se de mim
                    </label>
                    <a href="/">Precisa de ajuda?</a>
                </div>
                <span>Novo por aqui? <a href="">Registre-se agora</a>.</span>
                
            </FormBox>
            
        </Container>
        
        
    )
}