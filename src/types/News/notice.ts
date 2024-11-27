import { FileResponse, ImageResponse, PageResponse } from "../common";

export type NoticeList = {
  check: boolean;
  information: {
    pageResponse: PageResponse;
    noticeList: NoticeListItem[];
  };
};

export type NoticeListItem = {
  noticeId: number;
  title: string;
  createdDate: string;
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
