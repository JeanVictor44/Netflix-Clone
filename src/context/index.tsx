import { ReactNode } from 'react'
import { DetailsSerieProvider } from './DetailsSerie'
import { HomeMoviesProvider } from './HomeMovies' 
import { TrailerModalProvider } from './TrailerModal'
import { AuthProvider } from './Auth'

interface GlobalContextProps {
    children:ReactNode
} 

export const GlobalContext = ({children}:GlobalContextProps ) => {
    return (
        <DetailsSerieProvider>
            <HomeMoviesProvider>
                <TrailerModalProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </TrailerModalProvider>
            </HomeMoviesProvider>
        </DetailsSerieProvider>
    )
}