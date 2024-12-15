import { Business } from "@/types/ActivityReport/business";
import * as S from "@styles/ActivityReport/BusinessList/BusinessListComponentStyle";
import { useNavigate } from "react-router-dom";
import BusinessListItem from "./BusinessListItem";

interface BusinessListComponentProps {
  businessListData: Business[];
}

const BusinessListComponent: React.FC<BusinessListComponentProps> = ({
  businessListData,
}) => {
  const navigator = useNavigate();

  return (
    <S.Container>
      {businessListData.map((item, index) => (
        <BusinessListItem
          key={item.businessId}
          title={item.title}
          // Author={item.Author}
          Author={"총학생회"} // 총학생회 고정인지 확인 필요
          date={item.createdAt}
          isEnd={index >= businessListData.length - 1}
          onClick={() =>
            navigator(`/activityReport/businessListDetail/${item.businessId}`)
          }
        />
      ))}
    </S.Container>
  );
};

export default BusinessListComponent;
