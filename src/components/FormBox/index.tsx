import { ReactNode } from "react"
import { Container } from "./style"

interface FormBoxProps {
    children: ReactNode
}
export const FormBox = ({children}: FormBoxProps) => {
    return (
        <Container>
            {
                children
            }
        </Container>
    )
}