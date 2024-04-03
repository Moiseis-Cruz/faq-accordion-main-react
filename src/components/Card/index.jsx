import styled from "styled-components"
import { Title } from "../Title"
import ImgStar from "../../images/icon-star.svg"
import { GuideSection } from "../GuideSection"

export const Card = () => {
    return(
        <Container>
            <CardContent>
                <img src={ImgStar} alt="Icon Star" />
                <Title />
            </CardContent>

            <ul>
                <GuideSection>Título 1</GuideSection>
                <GuideSection>Título 2</GuideSection>
                <GuideSection>Título 3</GuideSection>
            </ul>
        </Container>
    )
}

const Container = styled.div`
    max-width: 992px;
    width: 100%;
    height: 626px;
    background-color: aliceblue;
    padding: 56px 66px;
    overflow: hidden;
    border-radius: 12px;
`

const CardContent = styled.div`
    display: flex;
    gap: 21px;
`