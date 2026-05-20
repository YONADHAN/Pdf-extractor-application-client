import { axiosMultipartInstance } from '@/shared/api/axios';

import type {
  UploadPdfResponse,
} from '../types/upload_pdf_types';

export const uploadPdfApi = async (
  formData: FormData,
) => {
  const response =
    await axiosMultipartInstance.post<UploadPdfResponse>(
      '/pdf/upload',
      formData,
    );

  return response.data;
};