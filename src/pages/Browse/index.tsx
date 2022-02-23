import { useContext, useEffect } from 'react'
import MainSerie from '../../components/MainSerie'
import { MovieListsWrapper } from '../../components/MovieListsWrapper'
import { TrailerModal }  from '../../components/TrailerModal'
import Loader from '../../components/Loader'
import { DetailsSerieContext } from '../../context/DetailsSerie'
import Header from '../../components/BrowseHeader';
import { useAuth } from '../../context/Auth'
import { useNavigate } from 'react-router-dom'


export const Browse = () => {
    const { detailsSerie } = useContext(DetailsSerieContext)
    const { signed } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
      if(!signed){
        navigate('/login')
      }
    }, [])

    if(detailsSerie.name){
        return (
          <>
            <TrailerModal videoKey={detailsSerie.trailerKey}/>  
            <Header />
            <MainSerie/>
            <MovieListsWrapper />
          </>
          )
      }

      return (
        <>
          <Loader />
        </>
      )
}