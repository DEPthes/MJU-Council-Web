import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

import { getAllRegulations } from "@/apis/regulations";
import { RegulationsList } from "@/types/Document/regulations";

export function useAllRegulations(): UseSuspenseQueryResult<
  RegulationsList,
  Error
> {
  return useSuspenseQuery({
    queryKey: ["GetAllRegulations"],
    queryFn: getAllRegulations,
  });
}
