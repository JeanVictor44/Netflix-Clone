import { 
    createContext,
    useState,
    ReactNode,
} from 'react'


type TrailerModalContextProps = {
    isTrailerModalOpen: boolean,
    closeTrailerModal: () => void;
    openTrailerModal: () => void
    
}
const defaultValue = {
    isTrailerModalOpen: false,
    closeTrailerModal: () => {},
    openTrailerModal: () => {}
}

export const TrailerModalContext = createContext<TrailerModalContextProps>(defaultValue)

interface TrailerModalProviderProps {
    children: ReactNode
}

export const TrailerModalProvider = ({children}: TrailerModalProviderProps) => {
    const [ isTrailerModalOpen, setIsTrailerModalOpen ] = useState(false)
    return (
        <TrailerModalContext.Provider value={{
            isTrailerModalOpen,
            closeTrailerModal: () => setIsTrailerModalOpen(false),
            openTrailerModal: () => setIsTrailerModalOpen(true),
        }}>
            {
                children
            }
        </TrailerModalContext.Provider>
    )
}