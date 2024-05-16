import { Title } from "../Title";
import ImgStar from "../../assets/images/icon-star.svg";
import { GuideSection } from "../GuideSection";
import { Question } from "../Question";
import { QuestionAnswer } from "../QuestionAnswer";
import { useState } from "react";
import { Container, CardContent } from "../../styles/Styles";
import { FaqData } from "./Card.mock";

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
                            <GuideSection $expanded={activeTab === index} onClick={() => handleTabClick(index)}>
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