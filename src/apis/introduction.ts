import { api } from ".";

export async function getCommittees() {
  const response = await api.get(`http://52.79.142.78:8080/api/v1/committees`);
  return response?.data;
}

export async function getEachPart() {
  const response = await api.get(`http://52.79.142.78:8080/api/v1/departments`);
  return response?.data;
}

export async function getIntroduce() {
  const response = await api.get(`http://52.79.142.78:8080/api/v1/council/images`);
  return response?.data;
}

export async function getOrganization() {
  const response = await api.get(`http://52.79.142.78:8080/api/v1/organizations`);
  return response?.data;
}
