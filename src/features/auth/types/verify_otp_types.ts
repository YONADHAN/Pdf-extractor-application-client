export interface VerifyOtpRequest {
  email: string;

  otp: string;
}

export interface VerifyOtpResponse {
  success: boolean;

  message: string;
}