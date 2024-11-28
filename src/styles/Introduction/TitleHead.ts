import styled from "styled-components";

export const TDiv = styled.div`
    display: flex;
    padding: 40px 20px;
    border-bottom: 1px solid var(--M5);

`;

export const TP = styled.p`
    display: flex;
    padding-top: 16px;
    position: relative;
    color: var(--Black);
    font: var(--SectionTitle);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 24px; /* 너비 */
        height: 4px; /* 두께 */
        background-color: var(--Primary);
    }
`;
