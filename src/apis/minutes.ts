import { MinutesDetail, MinutesList } from "@/types/Document/minutes";
import axios from "axios";

// 회의록 전체 조회
export async function getMinutes(page: number): Promise<MinutesList> {
  const response = await axios.get(`/api/v1/minutes?page=${page}&size=10`);

  return response?.data;
}

// 회의록 상세 조회
export async function getMinutesDetail(
  minuteId: number
): Promise<MinutesDetail> {
  const response = await axios.get(`/api/v1/minutes/${minuteId}`);

  return response?.data;
}
