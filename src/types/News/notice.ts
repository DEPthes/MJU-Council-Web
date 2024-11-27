import { PageResponse } from "../page";

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
      images: NoticeDetailImage[];
      files: NoticeDetailFile[];
    };
  };
};

export type NoticeDetailImage = {
  imageId: number;
  imageName: string;
  imageUrl: string;
};

export type NoticeDetailFile = {
  fileId: number;
  fileName: string;
  fileUrl: string;
};
