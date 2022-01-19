import { 
    createContext, 
    Dispatch, 
    ReactNode, 
    SetStateAction,
    useState,
} from 'react'

type Genre = {
    name:string
}

type MainSerie = {
    name:string,
    vote_average:number,
    first_air_date:string,
    number_of_seasons:number,
    overview:string,
    genres:Genre[],
    backdrop_path:string,
    trailerKey:string
}

type DetailsSerieContextProps = {
    detailsSerie: MainSerie,
    setDetailsSerie: Dispatch<SetStateAction<MainSerie>>
}

const defaultValue = {
    detailsSerie:{} as MainSerie,
    setDetailsSerie: () => {}
}

export const DetailsSerieContext = createContext<DetailsSerieContextProps>(defaultValue)


interface DetailsSerieProviderProps {
    children:ReactNode
}
export const DetailsSerieProvider = ({children}: DetailsSerieProviderProps) => {
    const [ detailsSerie, setDetailsSerie ] = useState<MainSerie>(defaultValue.detailsSerie)

    return (
        <DetailsSerieContext.Provider value={
            {
                detailsSerie,
                setDetailsSerie
            }
        }>
            {
                children
            }
        </DetailsSerieContext.Provider>
    )
}