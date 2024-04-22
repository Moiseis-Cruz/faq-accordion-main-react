import styled from "styled-components";
import BgPlus  from "../images/icon-plus.svg";
import BgMinus from "../images/icon-minus.svg";

export const FAQTitle = styled.h1`
    color: hsl(292, 42%, 14%);
    font-size: 56px;
    font-weight: 700;
`

export const Topic = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: hsl(292, 42%, 14%);
    @media (max-width: 425px) {
        width: 220px;
    }
`

export const GuideItem = styled.li`
    width: 100%;
    padding: 20px 0;
    background: no-repeat right top 15px url(${props => (props.expanded ? BgMinus : BgPlus)});
    min-height: 54px;
    border-bottom: 3px solid hsl(275, 100%, 97%);
    cursor: pointer;
    &:active ${Topic}{
        color: rgb(173,40,235);
    }
`

export const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: hsl(292, 16%, 49%);
    margin-top: 20px;
    padding-bottom: 10px;
    @media (max-width: 425px) {
        width: 270px;
        font-size: 14px;
    }
`