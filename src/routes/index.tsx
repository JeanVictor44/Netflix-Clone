import { 
    useRoutes,
    Navigate 
} from 'react-router-dom'
import { Login } from '../pages/Login'
import { Browse } from '../pages/Browse'

export const Routes = () => {
    const routes = useRoutes([
        { path: '/', element: <Navigate to='/login' /> },
        { path: '/login', element: <Login /> },
        { path: '/browse', element: <Browse />}
    ])
    return routes
}