import styled from "styled-components";
import Arrow from "../assets/image/Arrow.svg";

const HomePageBtn = () => {
    return(
        <>
            <Btn>
                <P>총학생회 소개 바로가기</P>
                <Img src={Arrow}/>
            </Btn>
        </>
    );
};

const Btn = styled.button`
    display:flex;
    flex-direction: row;
    justify-content:center;
    background-color: transparent;
    padding:0;
    border:0;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-40px);
`;

const P = styled.p`
    display:flex;
    color: var(--M5, #F2F4F7);
    text-align: center;
    margin:0;
    /* List Title */
    font-family: "Noto Sans KR";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
`;

const Img = styled.img`
    margin: 0 0 0 4px;
`;

export default HomePageBtn;