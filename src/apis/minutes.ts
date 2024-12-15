import { MinutesDetail, MinutesList } from "@/types/Document/minutes";
import { api } from ".";

// 회의록 전체 조회
export async function getMinutes(
  page: number,
  keyword: string
): Promise<MinutesList> {
  const response = await api.get(
    `/api/v1/minutes?page=${page}&size=10&keyword=${keyword}`
  );

  return response?.data;
}

// 회의록 상세 조회
export async function getMinutesDetail(
  minuteId: number
): Promise<MinutesDetail> {
  const response = await api.get(`/api/v1/minutes/${minuteId}`);

  return response?.data;
}
