// ------------------- {{ 사업 목록 조회 }} ---------------------------------

export interface Business {
  businessId: number;
  title: string;
  createdAt: string;
}

interface Information {
  totalPage: number;
  pageSize: number;
  totalElements: number;
  contents: Business[];
}

export interface BusinessListResponse {
  check: boolean;
  information: Information;
  message: string | null;
}
