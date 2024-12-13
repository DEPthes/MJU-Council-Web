import { NoticeDetail, NoticeList } from "@/types/News/notice";
import axios from "axios";

// 공지사항 목록 조회
export async function getNotices(
  page: number,
  keyword: string
): Promise<NoticeList> {
  const response = await axios.get(
    `/api/v1/notices?page=${page}&size=10&keyword=${keyword}`
  );

  return response?.data;
}

// 공지사항 상세 조회
export async function getNotice(noticeId: number): Promise<NoticeDetail> {
  const response = await axios.get(`/api/v1/notices/${noticeId}`);

  return response?.data;
}
