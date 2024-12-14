import { AllianceListResponse } from "@/types/ActivityReport/coalition";
import axios from "axios";

// 사업 목록 조회
export async function getCoalitionList(
  page: number
): Promise<AllianceListResponse> {
  let url = `/api/v1/alliances?page=${page - 1}`;

  const response = await axios.get(url);

  return response?.data;
}

// 사업 목록 상세 조회
// export async function getBusinessDetail(
//   id: number
// ): Promise<BusinessDetailResponse> {
//   const response = await axios.get(`/api/v1/businesses/${id}`);

//   return response?.data;
// }
