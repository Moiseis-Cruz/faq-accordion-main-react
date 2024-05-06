import styled from "styled-components";
import BgPlus  from "../assets/images/icon-plus.svg";
import BgMinus from "../assets/images/icon-minus.svg";
import ImgBgDesktop from "../assets/images/background-pattern-desktop.svg";
import ImgBgMobile from "../assets/images/background-pattern-mobile.svg";

export const MainContainer = styled.section`
    width: 100%;
    max-width: 1440px;
    min-height: 100dvh;
    background: top center / contain no-repeat #e5c6f2 url(${ImgBgDesktop});
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    @media (max-width: 375px) {
        background: top center / contain no-repeat #e5c6f2 url(${ImgBgMobile});
        padding: 0;
    }
`

export const Container = styled.div`
    max-width: 600px;
    width: 100%;
    min-height: 490px;
    background-color: hsl(0, 0%, 100%);
    padding: 46px 36px;
    overflow: hidden;
    border-radius: 12px;
    @media (max-width: 425px) {
        width: 327px;
        padding: 23px 18px;
    }
`

export const CardContent = styled.div`
    display: flex;
    gap: 21px;
    margin-bottom: 28px;
`

export const FAQTitle = styled.h1`
    color: hsl(292, 42%, 14%);
    font-size: 56px;
    font-weight: 700;
`

export const Topic = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: hsl(292, 42%, 14%);
    width: 90%;
    @media (max-width: 425px) {
        width: 80%;
    }
`

export const GuideItem = styled.li`
    width: 100%;
    padding: 20px 0;
    background: no-repeat right top 15px url(${props => props.$expanded ? BgMinus : BgPlus});
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