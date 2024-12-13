import { NoticeList } from "@/types/News/notice";
import axios from "axios";

export async function getNotices(
  page: number,
  keyword: string
): Promise<NoticeList> {
  const response = await axios.get(
    `/api/v1/notices?page=${page}&size=10&keyword=${keyword}`
  );

  return response?.data;
}
