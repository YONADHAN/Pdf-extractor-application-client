import { useMutation } from '@tanstack/react-query';

import { generatePdfApi } from '../api/pdf_api';

export const useGeneratePdf =
  () => {
    return useMutation({
      mutationFn:
        generatePdfApi,
    });
  };