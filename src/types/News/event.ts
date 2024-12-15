import { ImageFileResponse } from "../common";

export type EventList = {
  check: boolean;
  information: {
    title: string;
    eventId: number;
    startDate: string;
    endDate: string;
    cover: string;
  }[];
};

export type EventDetail = {
  check: boolean;
  information: {
    title: string;
    content: string;
    startDate: string;
    endDate: string;
    images: ImageFileResponse[];
    eventDetails: EventDetailResponse[];
  };
};

export type EventDetailResponse = {
  title: string;
  createdAt: string;
  eventDetailId: number;
  cover: string;
};

export type EventGuideDetail = {
  check: boolean;
  information: {
    title: string;
    content: string;
    createdAt: string;
    images: ImageFileResponse[];
    files: ImageFileResponse[];
  };
};
