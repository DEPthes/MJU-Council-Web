import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getCoalitionList } from "@/apis/ActivityReport/coalition";
import { AllianceListResponse } from "@/types/ActivityReport/coalition";

interface useCoalitionListProps {
  page: number;
}

export function useCoalitionList({
  page,
}: useCoalitionListProps): UseSuspenseQueryResult<AllianceListResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetCoalition"],
    queryFn: () => getCoalitionList(page),
  });
}

// export function useBusinessDetail(
//   businessId: number
// ): UseSuspenseQueryResult<BusinessDetailResponse, Error> {
//   return useSuspenseQuery({
//     queryKey: ["GetBusinessDetail", businessId],
//     queryFn: () => getBusinessDetail(businessId),
//   });
// }
