import { useMutation } from '@tanstack/react-query';

import { sendOtpService } from '../services/send_otp_service';

export const useSendOtp = () => {
  return useMutation({
    mutationFn: sendOtpService,
  });
};