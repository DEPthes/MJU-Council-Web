import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getPromiseCategory } from "@/apis/ActivityReport/policy";
import { ResponseData } from "@/types/ActivityReport/policy";

export function usePromiseCategory(): UseSuspenseQueryResult<
  ResponseData,
  Error
> {
  return useSuspenseQuery({
    queryKey: ["GetPromiseCategory"],
    queryFn: () => getPromiseCategory(),
  });
}
