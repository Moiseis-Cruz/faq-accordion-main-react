import styled from "styled-components"

export const Card = ({children}) => {
    return(
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 992px;
    background-color: aliceblue;
`