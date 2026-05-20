export type PdfType =
  | 'original'
  | 'extracted';

export interface ListPdfItem {
  id: string;

  original_file_name: string;

  stored_file_name: string;

  type: PdfType;

  total_pages: number;

  url: string;

  createdAt: string;
}

export interface ListPdfData {
  data: ListPdfItem[];

  total: number;

  page: number;

  limit: number;

  totalPages: number;
}

export interface ListPdfResponse {
  success: boolean;

  data: ListPdfData;
}