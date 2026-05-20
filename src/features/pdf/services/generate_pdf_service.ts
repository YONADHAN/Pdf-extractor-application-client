import { generatePdfApi } from '../api/generate_pdf_api';

import type {
  GeneratePdfRequest,
  GeneratePdfResponse,
} from '../types/generate_pdf_types';

export const generatePdfService =
  async (
    data: GeneratePdfRequest,
  ): Promise<GeneratePdfResponse> => {
    return generatePdfApi(data);
  };