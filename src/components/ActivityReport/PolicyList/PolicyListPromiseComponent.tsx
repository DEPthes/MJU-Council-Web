import { Arrow } from "@/assets/common";
import { fulfillments } from "@/constants/ActivityReport/PolicyList";
import { PromiseInformation } from "@/types/ActivityReport/policy";
import { getFulfillmentRate } from "@/utils/ActivitiyReport";
import * as S from "@styles/ActivityReport/PolicyList/PolicyListPromiseComponentStyle";
import React, { useState } from "react";

interface PolicyListPromiseComponentProps {
  item: PromiseInformation;
  index: number;
}

const PolicyListPromiseComponent: React.FC<PolicyListPromiseComponentProps> = ({
  item,
  index,
}) => {
  const [isShowContent, setIsShowContent] = useState<boolean>(false);
  console.log(item);
  return (
    <S.Container>
      <S.titleContainer>
        <S.Title>
          {index + 1}. {item.title}
        </S.Title>
        <Arrow
          stroke="var(--Primary)"
          onClick={() => setIsShowContent((prevState) => !prevState)}
          style={{
            transform: isShowContent ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </S.titleContainer>
      <S.barBackground>
        <S.bar progress={getFulfillmentRate(item.progress)} />
      </S.barBackground>
      <S.dotContainer>
        {fulfillments.map((fulfillmentItem, index) => (
          <S.fulfillmentTextContainer key={index}>
            <S.dot
              $selected={fulfillments[item.progress] === fulfillmentItem}
            />
            <S.fulfillmentText
              $selected={fulfillments[item.progress] === fulfillmentItem}
            >
              {fulfillmentItem}
            </S.fulfillmentText>
          </S.fulfillmentTextContainer>
        ))}
      </S.dotContainer>
      {isShowContent && <S.Content>{item.content}</S.Content>}
    </S.Container>
  );
};

export default PolicyListPromiseComponent;
