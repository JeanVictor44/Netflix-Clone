import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useMemo,
    useState
} from 'react'
import { USER_DATA_KEY } from '../../constants'


export type AuthContext = {
    signed:boolean,
    signIn():void,     
    signOut():void
}

const AuthContext = createContext<AuthContext | null>(null)

export const AuthProvider = ({children}: PropsWithChildren<unknown>) => {
    //Sempre que o signed é alterado, seu valor é recalculado
    const [signed, setSigned] = useState<boolean>(() => {
        const userDataStorage = localStorage.getItem(USER_DATA_KEY)
        if(userDataStorage){
            return true
        }else {
            return false
        }
    })
    
    const signIn = useCallback(() => {
        setSigned(true)
    },[])
    
    const signOut = useCallback(() => {
        setSigned(false)
    }, [])

    const value = useMemo(() => ({
        signed,
        signIn,
        signOut
    }), [signed, signIn, signOut])

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>        
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}
