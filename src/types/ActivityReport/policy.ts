import { fulfillments } from "@/constants/ActivityReport/PolicyList";

export type FulfillmentType = (typeof fulfillments)[number];

// ---------------- {{ promiseCategory }} -----------------------------------
interface PromiseCategory {
  promiseCategoryId: number;
  title: string;
}

export interface PromiseCategoryResponse {
  check: boolean;
  information: PromiseCategory[];
  message: string | null;
}

// ------------------- {{ Promise }} ----------------------
export interface PromiseInformation {
  promiseCategoryId: number;
  title: string;
  content: string;
  progress: number;
}

export interface PromiseListResponse {
  check: boolean;
  information: PromiseInformation[];
  message: string | null;
}
