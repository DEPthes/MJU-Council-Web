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
