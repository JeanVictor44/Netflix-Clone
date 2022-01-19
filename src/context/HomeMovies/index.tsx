import { 
    createContext, 
    Dispatch, 
    ReactNode, 
    SetStateAction,
    useState,
    useEffect,
    useContext
} from 'react'
import Tmdb from '../../api/Tmdb'
import Youtube from '../../api/Youtube'
import { DetailsSerieContext} from '../DetailsSerie'

type HomeMovies = [
    {  
        slug:'Netflix',
        title:'Originais Netflix',
        movies: Serie[];
    },

    {
        slug:'Popular'
        title:'Populares',
        movies:Serie[] | Movie[]
    },

    {
        slug:'Em alta',
        title:'Séries em alta',
        movies:Serie[]
    },
]
type Serie = {
    name:string,
    id:string;
    vote_average:number,
    first_air_date:string,
    number_of_seasons:number,
    overview:string,
    genres:Genre[],
    backdrop_path:string,
    poster_path:string,
    original_name:string
}

type Genre = {
    name:string
}

type Movie = Omit<Serie, 'first_air_date' | 'number_of_seasons'>

type HomeMoviesContextProps = {
    homeMovies: HomeMovies,
    setHomeMovies:Dispatch<SetStateAction<HomeMovies>>

}
const defaultValue = {
    homeMovies:[] as unknown as HomeMovies,
    setHomeMovies: () => {}
}

export const HomeMoviesContext = createContext<HomeMoviesContextProps>(defaultValue)

interface HomeMoviesProviderProps {
    children:ReactNode
} 

export const HomeMoviesProvider = ({children}: HomeMoviesProviderProps) => {
    const [ homeMovies, setHomeMovies ] = useState<HomeMovies>(defaultValue.homeMovies)
    const { setDetailsSerie, detailsSerie} = useContext(DetailsSerieContext)
    useEffect(() => {
        const loadPage = async() => {
          const movies  = await Tmdb.getHomeMovies() as HomeMovies
          setHomeMovies(movies)
          
          const netflixSeries = movies.filter(list => list.slug === "Netflix")[0].movies
          const randomSerie = netflixSeries[Math.floor(Math.random() * (netflixSeries.length - 1) )] 
          const detailsRandomSerie = await Tmdb.getDetailsSerie(randomSerie.id) 
          const trailerKey = await Youtube.getTrailer(detailsRandomSerie.name)
          const detailsSerieWithTrailer = Object.assign(detailsRandomSerie, {trailerKey}) 
          
          setDetailsSerie(detailsSerieWithTrailer)
          console.log(detailsSerie, homeMovies)
        } 
        
    
        loadPage()
      }, [])

    return (
        <HomeMoviesContext.Provider 
            value={
                {
                    homeMovies,
                    setHomeMovies
                }
            }>
            {
                children
            }
        </HomeMoviesContext.Provider>
    )
}