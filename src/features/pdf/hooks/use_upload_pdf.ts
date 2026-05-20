import { useMutation } from '@tanstack/react-query';

import { uploadPdfService } from '../services/upload_pdf_service';

export const useUploadPdf = () => {
  return useMutation({
    mutationFn: uploadPdfService,
  });
};