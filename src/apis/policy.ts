import { PromiseListResponse } from "@/types/ActivityReport/policy";
import { api } from ".";

// 정책 카테고리 조회
export async function getPromiseCategory(): Promise<string[]> {
  const response = await api.get(`/api/v1/promise-category`);

  return response?.data;
}

// 공약 목록 조회
export async function getPromise(
  promiseTitle: string
): Promise<PromiseListResponse> {
  const response = await api.get(`/api/v1/promise/${promiseTitle}`);

  return response?.data;
}
