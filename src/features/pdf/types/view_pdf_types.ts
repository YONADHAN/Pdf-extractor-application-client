export type PdfType =
  | 'original'
  | 'extracted';

export interface ViewPdfData {
  id: string;

  original_file_name: string;

  stored_file_name: string;

  type: PdfType;

  total_pages: number;

  pages_included?: number[];

  url: string;

  createdAt: string;
}

export interface ViewPdfResponse {
  success: boolean;

  message: string;

  data: ViewPdfData;
}