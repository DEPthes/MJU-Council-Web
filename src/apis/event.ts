import { EventList, EventDetail, EventGuideDetail } from "@/types/News/event";
import { api } from ".";

// 행사 목록 조회
export async function getEvents(): Promise<EventList> {
  const response = await api.get(`/api/v1/events`);

  return response?.data;
}

// 행사 상세 조회
export async function getEvent(eventId: number): Promise<EventDetail> {
  const response = await api.get(`/api/v1/events/${eventId}`);

  return response?.data;
}

// 행사 세부사항 상세 조회
export async function getEventGuide(
  eventId: number,
  eventDetailId: number
): Promise<EventGuideDetail> {
  const response = await api.get(
    `/api/v1/events/${eventId}/detail/${eventDetailId}`
  );

  return response?.data;
}
