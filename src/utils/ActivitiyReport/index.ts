import { FulfillmentType } from "@/types/ActivityReport/PolicyList";

/** FulfillmentType 값에 따라 bar 이행도를 리턴하는 함수
 * @param FulfillmentType
 * @return 10 | 55 | 100
 */
export const getFulfillmentRate = (status: FulfillmentType) => {
  const fulfillmentMap: Record<FulfillmentType, number> = {
    "이행 전": 10,
    "이행 중": 55,
    "이행 완료": 100,
  };
  return fulfillmentMap[status];
};
