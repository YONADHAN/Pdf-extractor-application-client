import { useEffect, useState } from 'react';

interface VerifyOtpModalProps {
  isOpen: boolean;

  otp: string;

  setOtp: React.Dispatch<React.SetStateAction<string>>;

  onVerify: () => void;

  onResendOtp: () => void;

  isVerifyPending: boolean;

  isResendPending: boolean;
}

const VerifyOtpModal = ({
  isOpen,
  otp,
  setOtp,
  onVerify,
  onResendOtp,
  isVerifyPending,
  isResendPending,
}: VerifyOtpModalProps) => {
  const [secondsLeft, setSecondsLeft] = useState(120);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-2 text-2xl font-bold">
          Verify OTP
        </h2>

        <p className="mb-5 text-sm text-gray-500">
          Enter the OTP sent to your email
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />

        <button
          onClick={onVerify}
          disabled={isVerifyPending}
          className="w-full rounded-lg bg-black py-3 font-medium text-white"
        >
          {isVerifyPending
            ? 'Verifying...'
            : 'Verify OTP'}
        </button>

        <div className="mt-4 text-center">
          {secondsLeft > 0 ? (
            <p className="text-sm text-gray-500">
              Resend OTP in {secondsLeft}s
            </p>
          ) : (
            <button
              onClick={onResendOtp}
              disabled={isResendPending}
              className="text-sm font-medium text-blue-600"
            >
              {isResendPending
                ? 'Sending...'
                : 'Resend OTP'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpModal;