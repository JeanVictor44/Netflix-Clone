import { ReactNode } from 'react'
import { DetailsSerieProvider } from './DetailsSerie'
import { HomeMoviesProvider } from './HomeMovies' 
import { TrailerModalProvider } from './TrailerModal'
interface GlobalContextProps {
    children:ReactNode
} 

export const GlobalContext = ({children}:GlobalContextProps ) => {
    return (
        <DetailsSerieProvider>
            <HomeMoviesProvider>
                <TrailerModalProvider>
                    {children}
                </TrailerModalProvider>
            </HomeMoviesProvider>
        </DetailsSerieProvider>
    )
}