import { api } from ".";

export async function getCommittees() {
  const response = await api.get(`/api/v1/committees`);
  return response?.data;
}

export async function getEachPart() {
  const response = await api.get(`/api/v1/departments`);
  return response?.data;
}

export async function getIntroduce() {
  const response = await api.get(`/api/v1/council/images`);
  return response?.data;
}

export async function getOrganization() {
  const response = await api.get(`/api/v1/organizations`);
  return response?.data;
}
