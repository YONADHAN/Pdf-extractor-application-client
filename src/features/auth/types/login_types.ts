export interface LoginRequest {
  email: string;

  password: string;
}

export interface LoginUserData {

  userUUID: string;

  name: string;

  email: string;

}

export interface LoginResponse {
  success: boolean;

  message: string;

  data: LoginUserData;
}