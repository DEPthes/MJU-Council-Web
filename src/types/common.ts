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
