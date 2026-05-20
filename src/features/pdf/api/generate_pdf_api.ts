import axiosInstance from '@/shared/api/axios';

import type {
  GeneratePdfRequest,
  GeneratePdfResponse,
} from '../types/generate_pdf_types';

export const generatePdfApi =
  async (
    data: GeneratePdfRequest,
  ): Promise<GeneratePdfResponse> => {
    const response =
      await axiosInstance.post(
        '/pdf/generate',
        data,
      );

    return response.data;
  };