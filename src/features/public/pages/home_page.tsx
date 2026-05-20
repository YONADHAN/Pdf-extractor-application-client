import { useState } from 'react';

import axiosInstance from '@/shared/api/axios';

import { useAppDispatch } from '@/shared/hooks/redux_hooks';

import { clearUser } from '@/features/auth/redux/auth_slice';

const HomePage = () => {
  const [meResponse, setMeResponse] =
    useState<unknown>(null);

  const [refreshResponse, setRefreshResponse] =
    useState<unknown>(null);

  const [loading, setLoading] =
    useState(false);

const dispatch = useAppDispatch();

  // logout fn

  // POST /auth/logout
  const handleLogout = async () => {
    try {
      setLoading(true);

      const response =
        await axiosInstance.post(
          '/auth/logout',
        );

      console.log(response.data);

      // CLEAR REDUX LATER
      dispatch(clearUser());

      setMeResponse(null);

      setRefreshResponse(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  // GET /pdf/me
  const handleGetMe = async () => {
    try {
      setLoading(true);

      const response =
        await axiosInstance.get('/pdf/me');

      console.log(response.data);

      setMeResponse(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // POST /auth/refresh
  const handleRefresh = async () => {
    try {
      setLoading(true);

      const response =
        await axiosInstance.post(
          '/auth/refresh',
        );

      console.log(response.data);

      setRefreshResponse(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-6">
      <h1 className="text-3xl font-bold">
        Home Page
      </h1>

      <div className="flex gap-4">
        {/* GET /pdf/me */}
        <button
          onClick={handleGetMe}
          disabled={loading}
          className="rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-90 disabled:opacity-50"
        >
          GET /pdf/me
        </button>

        {/* POST /auth/refresh */}
        <button
          onClick={handleRefresh}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:opacity-90 disabled:opacity-50"
        >
          POST /auth/refresh
        </button>

        {/* POST /auth/logout */}
        <button
          onClick={handleLogout}
          disabled={loading}
          className="rounded-lg bg-red-600 px-6 py-3 text-white transition hover:opacity-90 disabled:opacity-50"
        >
          POST /auth/logout
        </button>
      </div>

      {/* /me RESPONSE */}
      {meResponse && (
        <div className="w-full max-w-2xl rounded-xl bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">
            /pdf/me Response
          </h2>

          <pre className="overflow-auto text-sm">
            {JSON.stringify(
              meResponse,
              null,
              2,
            )}
          </pre>
        </div>
      )}

      {/* /refresh RESPONSE */}
      {refreshResponse && (
        <div className="w-full max-w-2xl rounded-xl bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">
            /auth/refresh Response
          </h2>

          <pre className="overflow-auto text-sm">
            {JSON.stringify(
              refreshResponse,
              null,
              2,
            )}
          </pre>
        </div>
      )}

    </div>
  );
};

export default HomePage;