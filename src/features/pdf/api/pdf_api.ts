import axiosInstance, { axiosMultipartInstance } from '@/shared/api/axios';

import type { UploadPdfResponse } from '../types/upload_pdf_types';
import type { ListPdfResponse, PdfType } from '../types/list_pdf_types';
import type { ViewPdfResponse } from '../types/view_pdf_types';
import type { GeneratePdfRequest, GeneratePdfResponse } from '../types/generate_pdf_types';

export const uploadPdfApi = async (formData: FormData): Promise<UploadPdfResponse> => {
  const response = await axiosMultipartInstance.post<UploadPdfResponse>('/pdf/upload', formData);
  return response.data;
};

interface ListPdfApiParams {
  type: PdfType;
  page: number;
  limit: number;
}

export const listPdfApi = async ({ type, page, limit }: ListPdfApiParams): Promise<ListPdfResponse> => {
  const response = await axiosInstance.get<ListPdfResponse>(`/pdf/list/${type}`, {
    params: { page, limit },
  });
  return response.data;
};

export const viewPdfApi = async (storedFileName: string): Promise<ViewPdfResponse> => {
  const response = await axiosInstance.get<ViewPdfResponse>(`/pdf/view/${storedFileName}`);
  return response.data;
};

export const generatePdfApi = async (data: GeneratePdfRequest): Promise<GeneratePdfResponse> => {
  const response = await axiosInstance.post<GeneratePdfResponse>('/pdf/generate', data);
  return response.data;
};

export const deletePdfApi = async (storedFileName: string): Promise<any> => {
  const response = await axiosInstance.delete(`/pdf/delete/${storedFileName}`);
  return response.data;
};
