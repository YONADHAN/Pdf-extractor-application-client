import { useMutation } from '@tanstack/react-query';

import { registerService } from '../services/register_service';

export const useRegister = () => {
  return useMutation({
    mutationFn: registerService,
  });
};