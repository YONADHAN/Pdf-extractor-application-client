import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { toast } from 'sonner';

import RegisterForm from '../components/RegisterForm';

import VerifyOtpModal from '../components/VerifyOtpModel';

import { registerSchema } from '../schemas/register_schema';

import type { RegisterSchemaType } from '../schemas/register_schema';

import { useSendOtp } from '../hooks/use_send_otp';

import { useVerifyOtp } from '../hooks/use_verify_otp';

import { useRegister } from '../hooks/use_register';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [isOtpModalOpen, setIsOtpModalOpen] =
    useState(false);

  const [otp, setOtp] = useState('');

  const [pendingRegistrationData, setPendingRegistrationData] =
    useState<RegisterSchemaType | null>(null);

  // Send otp
  const {
    mutate: sendOtpMutation,
    isPending: isSendOtpPending,
  } = useSendOtp();

  // Verify otp
  const {
    mutate: verifyOtpMutation,
    isPending: isVerifyOtpPending,
  } = useVerifyOtp();

  // Register
  const {
    mutate: registerMutation,
    isPending: isRegisterPending,
  } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  // Register submit
  const onSubmit = (data: RegisterSchemaType) => {
    setPendingRegistrationData(data);

    sendOtpMutation(
      {
        email: data.email,
      },
      {
        onSuccess: (response) => {
          toast.success(response.message);

          setIsOtpModalOpen(true);
        },

        onError: (error: Error) => {
          toast.error(error.message);
        },
      },
    );
  };

  // Resend otp
  const handleResendOtp = () => {
    if (!pendingRegistrationData?.email) return;

    sendOtpMutation(
      {
        email: pendingRegistrationData.email,
      },
      {
        onSuccess: (response) => {
          toast.success(response.message);
        },

        onError: (error: Error) => {
          toast.error(error.message);
        },
      },
    );
  };

  // Verify otp
  const handleVerifyOtp = () => {
    if (!pendingRegistrationData) return;

    verifyOtpMutation(
      {
        email: pendingRegistrationData.email,
        otp,
      },
      {
        onSuccess: (response) => {
          toast.success(response.message);

          // Final registration
          registerMutation(pendingRegistrationData, {
            onSuccess: (registerResponse) => {
              toast.success(registerResponse.message);

              setIsOtpModalOpen(false);

              navigate('/login');
            },

            onError: (error: Error) => {
              toast.error(error.message);
            },
          });
        },

        onError: (error: Error) => {
          toast.error(error.message);
        },
      },
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Register to continue
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <RegisterForm
            register={register}
            errors={errors}
            isPending={isSendOtpPending}
          />
        </form>
         <div className='flex place-content-center'>
                    <span className='pt-3 text-blue-700 cursor-pointer' onClick={()=>{navigate('/login')}}>Sign In</span>
                </div>
      </div>

      <VerifyOtpModal
        isOpen={isOtpModalOpen}
        otp={otp}
        setOtp={setOtp}
        onVerify={handleVerifyOtp}
        onResendOtp={handleResendOtp}
        isVerifyPending={
          isVerifyOtpPending || isRegisterPending
        }
        isResendPending={isSendOtpPending}
      />
    </div>
  );
};

export default RegisterPage;