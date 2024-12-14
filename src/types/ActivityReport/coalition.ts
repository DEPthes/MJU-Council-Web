export interface CoalitionItemType {
  id: number; // 고유 ID
  image: string; // 이미지 URL
  title: string; // 제목
  date: string; // 날짜 문자열
}

// ------------------- {{ 제휴 목록 조회 }} ------------------
export interface AllianceContent {
  allianceId: number;
  title: string;
  cover: string;
  startDate: string; // ISO 형식 날짜 문자열
  endDate: string; // ISO 형식 날짜 문자열
}

interface AllianceInformation {
  totalPage: number;
  pageSize: number;
  totalElements: number;
  contents: AllianceContent[];
}

export interface AllianceListResponse {
  check: boolean;
  information: AllianceInformation;
  message: string;
}
