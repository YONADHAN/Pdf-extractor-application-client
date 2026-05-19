import { useMutation } from '@tanstack/react-query';

import { loginService } from '../services/login_service';

export const useLogin = () => {
  return useMutation({
    mutationFn: loginService,
  });
};