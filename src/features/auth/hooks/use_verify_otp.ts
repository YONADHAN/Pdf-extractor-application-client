import { useMutation } from '@tanstack/react-query';

import { verifyOtpService } from '../services/verify_otp_service';

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtpService,
  });
};