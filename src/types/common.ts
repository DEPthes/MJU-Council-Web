export type PageResponse = {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export type ImageResponse = {
  imageId: number;
  imageName: string;
  imageUrl: string;
};

export type FileResponse = {
  fileId: number;
  fileName: string;
  fileUrl: string;
};

// 이미지, 파일 결과 Type
export type ImageFileResponse = {
  id: number;
  name: string;
  url: string;
};
