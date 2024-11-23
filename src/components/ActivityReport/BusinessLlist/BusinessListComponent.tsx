import * as S from "@styles/ActivityReport/BusinessList/BusinessListComponentStyle";
import { useNavigate } from "react-router-dom";
import BusinessListItem from "./BusinessListItem";

const BusinessListComponent = () => {
  const businessListData = [
    {
      id: 1,
      title: "Project Alpha",
      Author: "Alice",
      date: "2024.11.12",
    },
    {
      id: 2,
      title: "Project Beta",
      Author: "Bob",
      date: "2024.11.13",
    },
    {
      id: 3,
      title: "Project Gamma",
      Author: "Charlie",
      date: "2024.11.14",
    },
    {
      id: 4,
      title: "Project Delta",
      Author: "David",
      date: "2024.11.15",
    },
  ];

  const navigator = useNavigate();

  return (
    <S.Container>
      {businessListData.map((item, index) => (
        <BusinessListItem
          key={item.id}
          title={item.title}
          Author={item.Author}
          date={item.date}
          isEnd={index >= businessListData.length - 1}
          onClick={() =>
            navigator(`/activityReport/businessListDetail/${item.id}`)
          }
        />
      ))}
    </S.Container>
  );
};

export default BusinessListComponent;
