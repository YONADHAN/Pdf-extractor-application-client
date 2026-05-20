import { useQuery }
  from '@tanstack/react-query';

import { listPdfService }
  from '../services/list_pdf_service';

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
      listPdfService({
        type,
        page,
        limit,
      }),
  });
};