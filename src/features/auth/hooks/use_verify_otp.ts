import { useMutation } from '@tanstack/react-query';

import { verifyOtpApi } from '../api/auth_api';

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtpApi,
  });
};