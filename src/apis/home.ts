import { api } from ".";

export async function getNotice() {
  const response = await api.get("/api/v1/notices");
  return response?.data;
}

export async function getBanner() {
  const response = await api.get("/api/v1/banners");
  return response?.data;
}

export async function getFooter() {
  const response = await api.get("/api/v1/council");
  return response?.data;
}
