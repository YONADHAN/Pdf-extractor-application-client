import type { FieldErrors } from 'react-hook-form';

import type { UseFormRegister } from 'react-hook-form';

import type { LoginSchemaType } from '../schemas/login_schema';

interface LoginFormProps {
  register: UseFormRegister<LoginSchemaType>;

  errors: FieldErrors<LoginSchemaType>;

  isPending: boolean;
}

const LoginForm = ({
  register,
  errors,
  isPending,
}: LoginFormProps) => {
  return (
    <div className="space-y-5">
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
          placeholder="Enter your password"
          {...register('password')}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default LoginForm;