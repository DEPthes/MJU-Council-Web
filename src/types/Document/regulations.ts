export type RegulationsList = {
  check: boolean;
  information: {
    totalPage: number;
    pageSize: number;
    totalElements: number;
    contents: {
      regulationId: number;
      title: string;
      date: string;
      fileUrls: string[];
    }[];
  };
};

export type RegulationsDetail = {
  check: boolean;
  information: {
    regulationId: number;
    title: string;
    content: string;
    date: string;
    files: FileResponse[];
  };
};

export type FileResponse = {
  regulationFileId: number;
  fileName: string;
  fileUrl: string;
};
