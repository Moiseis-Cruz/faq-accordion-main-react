import styled from "styled-components"
import { Title } from "../Title"
import ImgStar from "../../images/icon-star.svg"

export const Card = ({children}) => {
    return(
        <Container>
            <div>
                <img src={ImgStar} alt="Icon Star" />
                <Title />
            </div>
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 992px;
    background-color: aliceblue;
`