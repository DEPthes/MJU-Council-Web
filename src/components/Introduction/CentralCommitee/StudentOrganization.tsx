import * as S from "../../../styles/Introduction/CentralCommitee/StudentOrganization";

import insta from "../../../assets/image/Instagram_blue.svg";
import home from "../../../assets/image/Home_blue.svg";
import Banner1 from "@/assets/image/Banner1.svg?react";
import Banner2 from "@/assets/image/Banner2.svg?react";

const StudentOrganization = () => {
    const A = [
        {
            "link": <Banner1/>,
            "title":"ICT융합대학",
            "category": "학생회",
            "name": "제비",
            "insta": "https://www.instagram.com/mju_ict/",
            "homePage":"/"
        },
        {
            "link": <Banner2/>,
            "title":"사회과학대학",
            "category": "학생회",
            "name": "VibeOn",
            "insta": "https://www.instagram.com/mju_coss_official/",
            "homePage":"/"
        }
    ]
    
    return (
        <>
            <S.All>
                {A.map((item, index) => (
                    <S.SODiv key={index}>
                        <S.TextDiv>
                            <S.TitleDiv>
                                <S.Title>{item.title}</S.Title>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.Category>{item.category}</S.Category>
                                <S.Name>{item.name}</S.Name>
                                <S.SocialLinks>
                                    <S.Tag href={item.insta}><img src={insta}/></S.Tag>
                                    <S.Tag href={item.homePage}><img src={home}/></S.Tag>
                                </S.SocialLinks>
                            </S.ContentDiv>
                        </S.TextDiv>
                        <S.Image>{item.link}</S.Image>
                    </S.SODiv>
                ))}
            </S.All>
        </>
    );
};

export default StudentOrganization;
