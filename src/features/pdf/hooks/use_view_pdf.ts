import { useQuery }
  from '@tanstack/react-query';

import { viewPdfService }
  from '../services/view_pdf_service';

export const useViewPdf = (
  storedFileName: string,
) => {
  return useQuery({
    queryKey: [
      'view-pdf',
      storedFileName,
    ],

    queryFn: () =>
      viewPdfService(
        storedFileName,
      ),

    enabled:
      !!storedFileName,
  });
};