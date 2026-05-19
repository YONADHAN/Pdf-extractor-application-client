import { registerApi } from '../api/register_api';

import type {
  RegisterRequest,
  RegisterResponse,
} from '../types/register_types';

export const registerService = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  return await registerApi(data);
};