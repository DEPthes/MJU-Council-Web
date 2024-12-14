import { fulfillments } from "@/constants/ActivityReport/PolicyList";

export interface Promise {
  id: number;
  title: string;
  content: string;
  progress: number;
}

export type FulfillmentType = (typeof fulfillments)[number];

// ---------------- {{ promiseCategory }} -----------------------------------
interface PromiseCategory {
  promiseCategoryId: number;
  title: string;
}

export interface ResponseData {
  check: boolean;
  information: PromiseCategory[];
  message: string | null;
}
