import { Arrow } from "@/assets/ActivityReport";
import { fulfillments } from "@/constants/ActivityReport/PolicyList";
import { FulfillmentType } from "@/types/ActivityReport/PolicyList";
import { getFulfillmentRate } from "@/utils/ActivitiyReport";
import * as S from "@styles/ActivityReport/PolicyList/PolicyListPromiseComponentStyle";
import React, { useState } from "react";

interface PolicyListPromiseComponentProps {
  index: number;
  title: string;
  fulfillment: FulfillmentType;
  content: string;
}

const PolicyListPromiseComponent: React.FC<PolicyListPromiseComponentProps> = ({
  index,
  title,
  fulfillment,
  content,
}) => {
  const [isShowContent, setIsShowContent] = useState<boolean>(false);
  return (
    <S.Container>
      <S.titleContainer>
        <S.Title>
          {index}. {title}
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
        <S.bar progress={getFulfillmentRate(fulfillment)} />
      </S.barBackground>
      <S.dotContainer>
        {fulfillments.map((fulfillmentItem) => (
          <S.fulfillmentTextContainer>
            <S.dot $selected={fulfillment === fulfillmentItem} />
            <S.fulfillmentText $selected={fulfillment === fulfillmentItem}>
              {fulfillmentItem}
            </S.fulfillmentText>
          </S.fulfillmentTextContainer>
        ))}
      </S.dotContainer>
      {isShowContent && <S.Content>{content}</S.Content>}
    </S.Container>
  );
};

export default PolicyListPromiseComponent;
