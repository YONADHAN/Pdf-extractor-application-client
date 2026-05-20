import { uploadPdfApi } from '../api/upload_pdf_api';

import type {
  UploadPdfRequest,
} from '../types/upload_pdf_types';

export const uploadPdfService = async ({
  file,
}: UploadPdfRequest) => {
  const formData = new FormData();

  formData.append('pdf', file);

  return uploadPdfApi(formData);
};