import { useMutation } from '@tanstack/react-query';
import { deletePdfApi } from '../api/pdf_api';

export const useDeletePdf = () => {
  return useMutation({
    mutationFn: deletePdfApi,
  });
};
