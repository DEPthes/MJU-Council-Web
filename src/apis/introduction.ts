import axios from "axios";

export async function getCommittees() {
  const response = await axios.get("/api/v1/committees");
  return response?.data;
}

export async function getEachPart() {
    const response = await axios.get("/api/v1/departments");
    return response?.data;
}

export async function getIntroduce() {
  const response = await axios.get("/api/v1/council/images");
  return response?.data;
}

export async function getOrganization() {
  const response = await axios.get("/api/v1/organizations");
  return response?.data;
}