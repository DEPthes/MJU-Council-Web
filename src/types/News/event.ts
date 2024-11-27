import { ImageResponse } from "../common";

export type EventListDetail = {
  check: boolean;
  information: {
    eventResponse: {
      eventId: number;
      title: string;
      content: string;
      startDate: string;
      endDate: string;
      images: ImageResponse[];
      guideList: GuideListResponse[];
    };
  };
};

export type GuideListResponse = {
  guideId: number;
  cover: string;
  title: string;
  createdDate: string;
};
