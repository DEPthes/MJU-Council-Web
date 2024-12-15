import {
  AllianceDetailResponse,
  AllianceListResponse,
} from "@/types/ActivityReport/coalition";
import { api } from ".";

// 제휴 목록 조회
export async function getCoalitionList(
  page: number
): Promise<AllianceListResponse> {
  let url = `/api/v1/alliances?page=${page - 1}`;

  const response = await api.get(url);

  return response?.data;
}

// 제휴 목록 상세 조회
export async function getCoalitionDetail(
  id: number
): Promise<AllianceDetailResponse> {
  const response = await api.get(`/api/v1/alliances/${id}`);

  return response?.data;
}
