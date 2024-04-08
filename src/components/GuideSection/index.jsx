import styled from "styled-components"

export const GuideSection = (props) => {
    return(
        <GuideItem style={{}} {...props} />
    )
}

const GuideItem = styled.li`
    width: 100%;
    border-bottom: 3px solid hsl(275, 100%, 97%);
    background-color: #e6e6e6;
    min-height: 54px;
    cursor: pointer;
`