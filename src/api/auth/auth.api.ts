import { apiClient } from "../axios";
import type { ApiResponse } from "../common/api-response";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "./auth.types";

export const authApi = {
  login(data: LoginRequest) {
    return apiClient.post<ApiResponse<LoginResponse>>("/auth/login", data);
  },
  register(data: RegisterRequest) {
    return apiClient.post<ApiResponse<RegisterResponse>>(
      "/auth/register",
      data,
    );
  },
};
