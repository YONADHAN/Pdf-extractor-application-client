import { useMutation } from '@tanstack/react-query';

import { uploadPdfApi } from '../api/pdf_api';

export const useUploadPdf = () => {
  return useMutation({
    mutationFn: uploadPdfApi,
  });
};