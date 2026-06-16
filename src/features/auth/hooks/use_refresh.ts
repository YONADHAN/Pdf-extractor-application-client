import { useMutation } from '@tanstack/react-query';
import { refreshTokenApi } from '../api/auth_api';

export const useRefresh = () => {
  return useMutation({
    mutationFn: refreshTokenApi,
  });
};
