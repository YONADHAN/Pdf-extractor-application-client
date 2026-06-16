import { useMutation } from '@tanstack/react-query';

import { sendOtpApi } from '../api/auth_api';

export const useSendOtp = () => {
  return useMutation({
    mutationFn: sendOtpApi,
  });
};