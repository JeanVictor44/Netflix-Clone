import playButton from '../../assets/playButton.svg' 
import arrowDown from '../../assets/arrowDown.svg'
import { useContext } from 'react'
import { DetailsSerieContext } from '../../context/DetailsSerie'
import { 
    Container, 
    DetailsContainer, 
    InfoContainer, 
    ContainerButtons, 
    Overview, 
    ButtonScrollDown 
} from './style'
import { TrailerModalContext } from '../../context/TrailerModal'


const PrincipalSerie = () => {
    const { detailsSerie } = useContext(DetailsSerieContext)
    const { openTrailerModal } = useContext(TrailerModalContext)

    if(detailsSerie.name){
        return (
            <Container background={`https://image.tmdb.org/t/p/original/${detailsSerie.backdrop_path}`}>   
                <DetailsContainer>
                    <h1>{detailsSerie.name}</h1>
                    <InfoContainer>
                        <p>{detailsSerie?.vote_average.toFixed(1)} Classificação</p>
                        <p>{new Date(detailsSerie.first_air_date).getFullYear()}</p>
                        <p>{detailsSerie.number_of_seasons} Temporada{detailsSerie.number_of_seasons > 1 &&'s'}</p>
                    </InfoContainer>
                    <Overview>{detailsSerie.overview}</Overview>
                    <ContainerButtons>
    
                        <button onClick={openTrailerModal}><img src={playButton} />Assistir trailer</button>
                        <button >+ Minha lista</button>
                    </ContainerButtons>
                    <p><strong>Gêneros</strong>: {detailsSerie.genres.map(genre => genre.name + ' ')}</p>
                </DetailsContainer>
                <ButtonScrollDown>
                        <img src={arrowDown} alt="Arrow Down"/>
                </ButtonScrollDown>
            </Container>
        )
    }
    return <h1>Nada</h1>
}

export default PrincipalSerie