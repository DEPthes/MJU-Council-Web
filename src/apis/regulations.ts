import {
  RegulationsDetail,
  RegulationsList,
} from "@/types/Document/regulations";
import axios from "axios";

// 학생회칙 전체 조회
export async function getRegulations(page: number): Promise<RegulationsList> {
  const response = await axios.get(`/api/v1/regulations?page=${page}&size=10`);

  return response?.data;
}

// 학생회칙 page 구분 없이 전체 조회
export async function getAllRegulations(): Promise<RegulationsList> {
  const allData: RegulationsList = {
    check: true,
    information: {
      totalPage: 0,
      pageSize: 0,
      totalElements: 0,
      contents: [],
    },
  };

  let currentPage = 0;
  let hasMoreData = true;

  while (hasMoreData) {
    const response = await getRegulations(currentPage);

    allData.information.contents = [
      ...allData.information.contents,
      ...response.information.contents,
    ];

    allData.information.totalPage = response.information.totalPage;
    allData.information.pageSize = response.information.pageSize;
    allData.information.totalElements = response.information.totalElements;

    hasMoreData = currentPage + 1 < response.information.totalPage;
    currentPage++;
  }

  return allData;
}

// 학생회칙 상세 조회
export async function getRegulationsDetail(
  regulationsId: number
): Promise<RegulationsDetail> {
  const response = await axios.get(`/api/v1/regulations/${regulationsId}`);

  return response?.data;
}
