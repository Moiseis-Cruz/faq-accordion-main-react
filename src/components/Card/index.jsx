import styled from "styled-components"
import { Title } from "../Title"
import ImgStar from "../../images/icon-star.svg"
import { GuideSection } from "../GuideSection"
import { Question } from "../Question"
import { QuestionAnswer } from "../QuestionAnswer"

const FaqData = [
    {
        question: "What is Frontend Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        question: "Is Frontend Mentor free?",
        answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
        question: "Can I use Frontend Mentor projects in my portfolio?",
        answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
]

export const Card = () => {
    return(
        <Container>
            <CardContent>
                <img src={ImgStar} alt="Icon Star" />
                <Title />
            </CardContent>
            {
                FaqData.map((item, index) => {
                    return(
                        <ul key={index}>
                            <GuideSection>
                                <Question>{item.question}</Question>

                                <QuestionAnswer>{item.answer}</QuestionAnswer>
                            </GuideSection>
                        </ul>
                    )
                })
            }
        </Container>
    )
}

const Container = styled.div`
    max-width: 600px;
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
    margin-bottom: 66px;
`

/*
            <CardContent>
                <img src={ImgStar} alt="Icon Star" />
                <Title />
            </CardContent>

            <ul>
                <GuideSection>
                    <Question>What is Frontend Mentor, and how will it help me?</Question>

                    <QuestionAnswer>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</QuestionAnswer>
                </GuideSection>

                <GuideSection>
                    <Question>Is Frontend Mentor free?</Question>

                    <QuestionAnswer>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</QuestionAnswer>
                </GuideSection>

                <GuideSection>
                    <Question>Can I use Frontend Mentor projects in my portfolio?</Question>

                    <QuestionAnswer>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</QuestionAnswer>
                </GuideSection>

                <GuideSection>
                    <Question>How can I get help if I'm stuck on a Frontend Mentor challenge?</Question>

                    <QuestionAnswer>The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</QuestionAnswer>
                </GuideSection>

            </ul>
*/