import styled from "styled-components";
import { Title } from "../Title";
import ImgStar from "../../images/icon-star.svg";
import { GuideSection } from "../GuideSection";
import { Question } from "../Question";
import { QuestionAnswer } from "../QuestionAnswer";
import { useState } from "react";

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
        question: "How can I get help if I'm stuck on a challenge?",
        answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
];

export const Card = () => {

    const [ activeTab, setActiveTab ] = useState(null);

    const handleTabClick = (index) => {
        setActiveTab(index === activeTab ? null : index)
    };

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
                            <GuideSection expanded={activeTab === index} onClick={() => handleTabClick(index)}>
                                <Question>{item.question}</Question>

                                {activeTab === index && <QuestionAnswer>{item.answer}</QuestionAnswer>}
                            </GuideSection>
                        </ul>
                    )
                })
            }
        </Container>
    )
};

const Container = styled.div`
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

const CardContent = styled.div`
    display: flex;
    gap: 21px;
    margin-bottom: 28px;
`