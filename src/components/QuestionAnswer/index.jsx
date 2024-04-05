import styled from "styled-components"

export const QuestionAnswer = (props) => {
    return(
        <Description {...props} />
    )
}

const Description = styled.p`
    font-size: 16px;
    color: hsl(292, 16%, 49%);
    margin: 24px 0;
`