import { fulfillments } from "@/constants/ActivityReport/PolicyList";

export interface Promise {
  id: number;
  title: string;
  content: string;
  progress: number;
}

export type FulfillmentType = (typeof fulfillments)[number];
