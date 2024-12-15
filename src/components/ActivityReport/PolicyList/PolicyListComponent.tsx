import { usePromise } from "@/hooks/activityReport/usePromise";
import * as S from "@styles/ActivityReport/PolicyList/PolicyListComponentStyle";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ActivityReportHeader from "../ActivityReportHeader";
import PolicyListPromiseComponent from "./PolicyListPromiseComponent";

const PolicyListComponent = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const { data, refetch } = usePromise(tab!);
  const promiseList = data.information;

  useEffect(() => {
    refetch();
  }, [searchParams, tab]);

  return (
    <S.Container>
      <ActivityReportHeader text={tab!} />
      {promiseList.map((promise, index) => (
        <PolicyListPromiseComponent item={promise} key={index} />
      ))}
    </S.Container>
  );
};

export default PolicyListComponent;
