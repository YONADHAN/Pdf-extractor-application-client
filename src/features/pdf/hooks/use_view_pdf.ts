import { useQuery }
  from '@tanstack/react-query';

import { viewPdfApi }
  from '../api/pdf_api';

export const useViewPdf = (
  storedFileName: string,
) => {
  return useQuery({
    queryKey: [
      'view-pdf',
      storedFileName,
    ],

    queryFn: () =>
      viewPdfApi(
        storedFileName,
      ),

    enabled:
      !!storedFileName,
  });
};