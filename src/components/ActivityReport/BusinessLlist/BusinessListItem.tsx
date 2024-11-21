import * as S from "@styles/ActivityReport/BusinessList/BusinessListItemStyle";
import React from "react";

interface BusinessListItemProps {
  title: string;
  Author: string;
  date: string;
  isEnd: boolean;
}

const BusinessListItem: React.FC<BusinessListItemProps> = ({
  title,
  Author,
  date,
  isEnd,
}) => {
  return (
    <S.Container $isEnd={isEnd}>
      <S.Title>{title}</S.Title>
      <S.AuthorContainer>
        <div>{Author}</div> <div>{date}</div>
      </S.AuthorContainer>
    </S.Container>
  );
};

export default BusinessListItem;
