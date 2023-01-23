import { 
    useRoutes,
    Navigate, 
    
} from 'react-router-dom'
import { Login } from '../pages/Login'
import { Browse } from '../pages/Browse'
import { Register } from '../pages/Register'

export const Routes = () => {
    const routes = useRoutes([
        { path: '/', element: <Navigate to='/login' /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register />},
        { path: '/browse', element: <Browse />},
        
    ])
    return routes
}