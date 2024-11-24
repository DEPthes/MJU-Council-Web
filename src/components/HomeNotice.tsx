import { styled } from "styled-components";
import { useEffect, useState } from "react";

import Add from "../assets/image/Add.svg";
import Line from "../assets/image/Line 19.svg";
import Line2 from "../assets/image/Line 24.svg";
import dummyData from "../assets/home_dummy.json";

interface Notice{
    title: string;
    date: string;
}

const HomeNotice = () => {
    const [notices, setNotices] = useState<Notice[]>([]);

    useEffect(() => {
            const sortedNotices = dummyData
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5);
          setNotices(sortedNotices);
      }, []);

    return(
        <>
            <Div>
                <Top>
                    <P>공지사항</P>
                    <Img><img src={Add}/></Img>
                </Top>
                <Bar src={Line}/>
                <ContentAll>
                    {notices.map((notice, index) => (
                    <Content key={index}>
                        <TitleData>
                            <ContentTitle>{notice.title.length<16 ? notice.title : `${notice.title.slice(0, 15)}...`}</ContentTitle>
                            <ContentDate>{notice.date}</ContentDate>
                        </TitleData>
                        {index !== 4 && <ContentLine src={Line2} />}
                    </Content>
                    ))}
                </ContentAll>
                
            </Div>
        </>
    );
};

export default HomeNotice;

const Div = styled.div`
    display:flex;
    flex-direction: column;
    margin:0 20px 40px 20px;
`;

const Top = styled.div`
    display:flex;
    flex-direction: row;
`;

const P = styled.p`
    display:flex;
    align-items:center;
    justify-content:center;
    color: var(--Primary, #002A68);
    font-feature-settings: 'liga' off, 'clig' off;
    /* Contents Header */
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    margin: 0 auto 0 0;
`;

const Img = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width:24px;
    height:24px;
    background-color:transparent;
`;

const Bar = styled.img`
    display:flex;
    margin:14px 0 12px 0;
    height:1px;
`;

const ContentAll = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 12px 16px 12px;
    background: var(--M5, #F2F4F7);
`;

const Content = styled.div`
    
`;

const TitleData = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ContentTitle = styled.p`
    display:flex;
    color: var(--Black, #000);
    /* List Title */
    font-family: "Noto Sans KR";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin:0;
    cursor:pointer;
`;

const ContentDate = styled.p`
    display:flex;
    color: var(--M50, #8094B3);
    /* Caption */
    font-family: "Noto Sans KR";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin:0;
    margin-left: auto;
`;

const ContentLine = styled.img`
    display: flex;
    margin: 12px 0;
    width: 326px;
    height:1px;
`;