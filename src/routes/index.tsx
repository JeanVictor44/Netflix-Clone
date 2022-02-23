import { 
    useRoutes,
    Navigate, 
    
} from 'react-router-dom'
import { Login } from '../pages/Login'
import { Browse } from '../pages/Browse'
import { Register } from '../pages/Register'
import { Profiles } from '../pages/Profiles'
import { CreateProfile } from '../pages/CreateProfile'

export const Routes = () => {
    const routes = useRoutes([
        { path: '/', element: <Navigate to='/login' /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register />},
        { path:'/profiles', element:<Profiles />},
        { path: '/createprofile', element: <CreateProfile />},
        { path: '/browse', element: <Browse />},
        
    ])
    return routes
}