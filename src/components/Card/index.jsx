import styled from "styled-components"
import { Title } from "../Title"
import ImgStar from "../../images/icon-star.svg"

export const Card = ({children}) => {
    return(
        <Container>
            <CardContent>
                <img src={ImgStar} alt="Icon Star" />
                <Title />
            </CardContent>
            {children}
        </Container>
    )
}

const Container = styled.div`
    max-width: 992px;
    width: 100%;
    height: 626px;
    background-color: aliceblue;
`

const CardContent = styled.div`
    display: flex;
    gap: 21px;
`