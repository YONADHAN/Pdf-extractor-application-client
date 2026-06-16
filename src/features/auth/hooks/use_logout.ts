import { useMutation } from '@tanstack/react-query';
import { logoutApi } from '../api/auth_api';

export const useLogout = () => {
  return useMutation({
    mutationFn: logoutApi,
  });
};
