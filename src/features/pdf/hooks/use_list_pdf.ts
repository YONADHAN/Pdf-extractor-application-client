import { useQuery }
  from '@tanstack/react-query';

import { listPdfApi }
  from '../api/pdf_api';

import type {
  PdfType,
} from '../types/list_pdf_types';

interface UseListPdfParams {
  type: PdfType;

  page: number;

  limit: number;
}

export const useListPdf = ({
  type,
  page,
  limit,
}: UseListPdfParams) => {
  return useQuery({
    queryKey: [
      'pdfs',
      type,
      page,
      limit,
    ],

    queryFn: () =>
      listPdfApi({
        type,
        page,
        limit,
      }),
  });
};