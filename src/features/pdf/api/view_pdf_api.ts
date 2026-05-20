import axiosInstance
  from '@/shared/api/axios';

import type {
  ViewPdfResponse,
} from '../types/view_pdf_types';

export const viewPdfApi =
  async (
    storedFileName: string,
  ) => {
    const response =
      await axiosInstance.get<ViewPdfResponse>(
        `/pdf/view/${storedFileName}`,
      );

    return response.data;
  };