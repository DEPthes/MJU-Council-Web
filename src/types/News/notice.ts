import { FileResponse, ImageResponse } from "../common";

export type NoticeList = {
  check: boolean;
  information: {
    totalPage: number;
    pageSize: number;
    totalElements: number;
    contents: NoticeListItem[];
  };
};

export type NoticeListItem = {
  noticeId: number;
  title: string;
  createdAt: string;
};

export type NoticeDetail = {
  check: boolean;
  information: {
    noticeResponse: {
      title: string;
      content: string;
      createdDate: string;
      images: ImageResponse[];
      files: FileResponse[];
    };
  };
};
