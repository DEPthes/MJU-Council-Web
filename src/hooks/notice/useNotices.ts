import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getNotices } from "@apis/notice";
import { NoticeList } from "@/types/News/notice";

export function useNotices(
  page: number,
  keyword: string
): UseSuspenseQueryResult<NoticeList, Error> {
  return useSuspenseQuery({
    queryKey: ["GetNotices", page, keyword],
    queryFn: () => getNotices(page, keyword),
  });
}
