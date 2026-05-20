import { viewPdfApi }
  from '../api/view_pdf_api';

export const viewPdfService =
  async (
    storedFileName: string,
  ) => {
    return viewPdfApi(
      storedFileName,
    );
  };