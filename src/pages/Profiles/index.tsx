import { Header } from "../../components/Header"
import { Profile } from "../../components/Profile"
import { AddProfile } from "../../components/AddProfile"
import { Container, ProfilesContainer, ManageProfilesButton} from "./style"

export const Profiles = () => {
    return (
        <Container>
            <Header />
            <h1>Quem está assistindo ?</h1>
            
            <div>
                <ProfilesContainer>
                    <Profile name="Jean" urlImage="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                    <Profile name="Renata" urlImage="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                    <Profile name="Renata" urlImage="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                    <Profile name="Renata" urlImage="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                    <AddProfile />
                </ProfilesContainer>
                <ManageProfilesButton>Gerenciar perfils</ManageProfilesButton>
            </div>

        </Container>
    )
}