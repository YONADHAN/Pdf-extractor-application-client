import { listPdfApi }
  from '../api/list_pdf_api';

import type {
  PdfType,
} from '../types/list_pdf_types';

interface ListPdfServiceParams {
  type: PdfType;

  page: number;

  limit: number;
}

export const listPdfService =
  async ({
    type,
    page,
    limit,
  }: ListPdfServiceParams) => {
    return listPdfApi({
      type,
      page,
      limit,
    });
  };