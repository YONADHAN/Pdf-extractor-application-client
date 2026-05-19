import type { UseFormRegister } from 'react-hook-form';
import type { FieldErrors } from 'react-hook-form';

import type { RegisterSchemaType } from '../schemas/register_schema';

interface RegisterFormProps {
  register: UseFormRegister<RegisterSchemaType>;

  errors: FieldErrors<RegisterSchemaType>;

  isPending: boolean;
}

const RegisterForm = ({
  register,
  errors,
  isPending,
}: RegisterFormProps) => {
  return (
    <div className="space-y-5">
      {/* NAME */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          {...register('name')}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          {...register('email')}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* PASSWORD */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          {...register('password')}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* CONFIRM PASSWORD */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Confirm Password
        </label>

        <input
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword')}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
        />

        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Sending OTP...' : 'Register'}
      </button>
    </div>
  );
};

export default RegisterForm;