import { Container }from './style'

interface ProfileProps {
    name: string,
    urlImage: string
}

export const Profile = ({name, urlImage}: ProfileProps) => {
    return (
        <Container>
            <img src={urlImage} />
            <span>{name}</span>
        </Container>
    )
}