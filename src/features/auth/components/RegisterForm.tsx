import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerSchema } from '../schemas/register_schema';

import type { RegisterSchemaType } from '../schemas/register_schema';

import { useRegister } from '../hooks/use_register';

const RegisterForm = () => {
  const { mutate, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchemaType) => {
    mutate(data, {
      onSuccess: (response) => {
        console.log(response);
      },

      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
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

      {/* BUTTON */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};

export default RegisterForm;