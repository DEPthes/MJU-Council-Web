import { Arrow } from "@/assets/common";
import { fulfillments } from "@/constants/ActivityReport/PolicyList";
import { Promise } from "@/types/ActivityReport/PolicyList";
import { getFulfillmentRate } from "@/utils/ActivitiyReport";
import * as S from "@styles/ActivityReport/PolicyList/PolicyListPromiseComponentStyle";
import React, { useState } from "react";

interface PolicyListPromiseComponentProps {
  item: Promise;
}

const PolicyListPromiseComponent: React.FC<PolicyListPromiseComponentProps> = ({
  item,
}) => {
  const [isShowContent, setIsShowContent] = useState<boolean>(false);
  return (
    <S.Container>
      <S.titleContainer>
        <S.Title>
          {item.id}. {item.title}
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
        {fulfillments.map((fulfillmentItem) => (
          <S.fulfillmentTextContainer>
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
