import { useMutation } from '@tanstack/react-query';

import { registerApi } from '../api/auth_api';

export const useRegister = () => {
  return useMutation({
    mutationFn: registerApi,
  });
};