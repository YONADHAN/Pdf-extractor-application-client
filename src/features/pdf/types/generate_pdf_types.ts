export interface GeneratePdfRequest {
  stored_file_name: string;

  pages: number[];
}

export interface GeneratePdfData {
  id: string;

  original_file_name: string;

  stored_file_name: string;

  type: string;

  total_pages: number;

  pages_included?: number[];

  url: string;

  createdAt: string;
}

export interface GeneratePdfResponse {
  success: boolean;

  message: string;

  data: GeneratePdfData;
}