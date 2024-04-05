import styled from "styled-components"

export const Question = (props) => {
    return(
        <Topic {...props} />
    )
}

const Topic = styled.h3`
    font-size: 20px;
    color: hsl(292, 42%, 14%);
`