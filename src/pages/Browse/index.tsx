import { useContext } from 'react'
import MainSerie from '../../components/MainSerie'
import { MovieListsWrapper } from '../../components/MovieListsWrapper'
import { TrailerModal }  from '../../components/TrailerModal'
import Loader from '../../components/Loader'
import { DetailsSerieContext } from '../../context/DetailsSerie'
import Header from '../../components/BrowseHeader';



export const Browse = () => {
    const { detailsSerie } = useContext(DetailsSerieContext)


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