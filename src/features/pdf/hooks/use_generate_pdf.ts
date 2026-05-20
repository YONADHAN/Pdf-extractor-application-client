import { useMutation } from '@tanstack/react-query';

import { generatePdfService } from '../services/generate_pdf_service';

export const useGeneratePdf =
  () => {
    return useMutation({
      mutationFn:
        generatePdfService,
    });
  };