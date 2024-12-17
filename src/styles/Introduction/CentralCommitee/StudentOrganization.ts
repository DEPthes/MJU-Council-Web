import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    justify-content: center;
`;
export const SODiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

export const TextDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 16px;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    border-radius: 4px;
    background: var(--M5);
    margin: 0 0 12px 0;
`;

export const TitleDiv = styled.div`
    display: flex;
    margin:0;
`;

export const Title = styled.p`
    display: flex;
    color: var(--Black);
    font: var(--MenuTitle);
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Category = styled.p`
    display: flex;
    color: var(--M70);
    font: var(--Heading);
    border-right: 2px solid var(--M70);
    padding-right: 8px;
    margin-right: 8px;
`;

export const Category２ = styled.p`
    display: flex;
    color: var(--M70);
    font: var(--Heading);
    padding-right: 8px;
    margin-right: 8px;
`;

export const Image = styled.div`
    display: flex;
    width: 100%;
    // height: 220px;
    margin: 0 auto;
    img {
        width: 100%; /* 부모의 너비에 맞춤 */
        object-fit: cover; /* 이미지가 부모 영역을 채우도록 */
        object-position: center; /* 중앙에 위치 */
    }
`;

export const Name = styled.p`
    display: flex;
    color: var(--M70);
    font: var(--Heading);
`;

export const SocialLinks = styled.div`
    display: flex;
    margin-left: auto;
`;

export const Tag = styled.a`
    display: flex;
    margin-left: 12px;
`;