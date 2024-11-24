import styled from "styled-components";

import Bulb from "../assets/image/Bulb.svg";
import Comment from "../assets/image/Comment.svg";
import Heart from "../assets/image/Heart...S2.svg";
import Calander from "../assets/image/Calendar_duotone_line.svg";
import Book from "../assets/image/Book.svg";

const HomeCategory = () => {
    return(
        <>
            <Div>
                <Indiv>
                    <Img src={Bulb}/>
                    <CName>정책 목록</CName>
                </Indiv>
                <Indiv>
                    <Img src={Comment}/>
                    <CName>사업 목록</CName>
                </Indiv>
                <Indiv>
                    <Img src={Heart}/>
                    <CName>제휴 현황</CName>
                </Indiv>
                <Indiv>
                    <Img src={Calander}/>
                    <CName>행사</CName>
                </Indiv>
                <Indiv>
                    <Img src={Book}/>
                    <CName>회의록</CName>
                </Indiv>
            </Div>
        </>
    );
};

const Div = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    margin: 40px 0;
`;

const Img = styled.img`
    display: flex;
    padding: 12px;
    align-items: center;
    align-self: stretch;
    border-radius: 100px;
    border: 1px solid var(--M30, #B2BFD2);
    margin: 0 6px;
    background-color:white;
    cursor: pointer;
`;

const Indiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const CName = styled.p`
    display:flex;
    margin: 8px 0 0 0;
    justify-content: center;

    color: var(--Primary, #002A68);
    text-align: center;

    /* Navigation Title */
    font-family: "Noto Sans KR";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px; /* 100% */
`;

export default HomeCategory;
