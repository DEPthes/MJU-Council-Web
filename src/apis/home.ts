import { api } from ".";

export async function getNotice() {
  const response = await api.get("http://52.79.142.78:8080/api/v1/notices");
  return response?.data;
}

export async function getBanner() {
  const response = await api.get("http://52.79.142.78:8080/api/v1/banners");
  return response?.data;
}

export async function getFooter() {
  const response = await api.get("http://52.79.142.78:8080/api/v1/council");
  return response?.data;
}
