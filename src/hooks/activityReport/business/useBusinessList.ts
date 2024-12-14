import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getBusinessList } from "@/apis/business";
import { BusinessListResponse } from "@/types/ActivityReport/business";

interface useBusinessListProps {
  keyword?: string;
  page: number;
}

export function useBusinessList({
  keyword,
  page,
}: useBusinessListProps): UseSuspenseQueryResult<BusinessListResponse, Error> {
  if (keyword === undefined) {
    return useSuspenseQuery({
      queryKey: ["GetBusiness"],
      queryFn: () => getBusinessList(page),
    });
  }
  return useSuspenseQuery({
    queryKey: ["GetBusiness", keyword],
    queryFn: () => getBusinessList(page, keyword),
  });
}
