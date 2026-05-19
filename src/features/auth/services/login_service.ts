import { loginApi } from '../api/login_api';

import type {
  LoginRequest,
  LoginResponse,
} from '../types/login_types';

export const loginService = async (
  data: LoginRequest,
): Promise<LoginResponse> => {
  return await loginApi(data);
};