import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { toast } from 'sonner';

import LoginForm from '../components/LoginForm';

import { loginSchema } from '../schemas/login_schema';

import type { LoginSchemaType } from '../schemas/login_schema';

import { useLogin } from '../hooks/use_login';

const LoginPage = () => {
    const navigate = useNavigate();

    const {
        mutate: loginMutation,
        isPending,
    } = useLogin();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginSchemaType) => {
        loginMutation(data, {
            onSuccess: (response) => {
                toast.success(response.message);

                console.log(response.data);

                navigate('/');
            },

            onError: (error: Error) => {
                toast.error(error.message);
            },
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Login to continue
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <LoginForm
                        register={register}
                        errors={errors}
                        isPending={isPending}
                    />
                </form>
            </div>
        </div>
    );
};

export default LoginPage;