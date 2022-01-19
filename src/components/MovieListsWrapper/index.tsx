import { MovieList } from '../MovieList'
import { useContext } from 'react'
import { HomeMoviesContext } from '../../context/HomeMovies'

export const MovieListsWrapper = () => {
    const { homeMovies } = useContext(HomeMoviesContext)
    return (
        <section >
                { 
                  homeMovies.map((item) =>(     
                      <MovieList title={item.title} movies={item.movies}/>
                  )) 
                }
        </section>
    )
}