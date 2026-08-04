import { useState } from "react";

import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/LoginForm";

import type { LoginFormValues } from "../schemas/login.schema";
import { authApi } from "../../api/auth";
import { useSnackbar } from "notistack";
import { getApiErrorMessage } from "../../utils/get-api-error-message";
import { useNavigate } from "react-router-dom";
import { authStorage } from "../services/auth-storage";

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleLogin = async (data: LoginFormValues) => {
    try {
      setIsSubmitting(true);

      const response = await authApi.login(data);
      const { accessToken, refreshToken } = response.data.data;
      authStorage.setTokens(accessToken, refreshToken);

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      enqueueSnackbar(getApiErrorMessage(error), {
        variant: "error",
      });

      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <LoginForm isSubmitting={isSubmitting} onSubmit={handleLogin} />
    </AuthLayout>
  );
}
