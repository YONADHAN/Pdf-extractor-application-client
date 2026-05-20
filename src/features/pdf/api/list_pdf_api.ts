import axiosInstance
  from '@/shared/api/axios';

import type {
  ListPdfResponse,
  PdfType,
} from '../types/list_pdf_types';

interface ListPdfApiParams {
  type: PdfType;

  page: number;

  limit: number;
}

export const listPdfApi =
  async ({
    type,
    page,
    limit,
  }: ListPdfApiParams) => {
    const response =
      await axiosInstance.get<
        ListPdfResponse
      >(
        `/pdf/list/${type}`,
        {
          params: {
            page,
            limit,
          },
        },
      );

    return response.data;
  };