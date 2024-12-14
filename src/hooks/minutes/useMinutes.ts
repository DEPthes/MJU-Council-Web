import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getMinutes } from "@/apis/minutes";
import { MinutesList } from "@/types/Document/minutes";

export function useMinutes(
  page: number,
  keyword: string
): UseSuspenseQueryResult<MinutesList, Error> {
  return useSuspenseQuery({
    queryKey: ["GetMinutes", page, keyword],
    queryFn: () => getMinutes(page, keyword),
  });
}
