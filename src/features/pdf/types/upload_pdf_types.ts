export interface UploadPdfRequest {
  file: File;
}

export interface UploadPdfData {
  id: string;

  original_file_name: string;

  stored_file_name: string;

  type: string;

  total_pages: number;

  url: string;

  createdAt: string;
}

export interface UploadPdfResponse {
  success: boolean;

  message: string;

  data: UploadPdfData;
}