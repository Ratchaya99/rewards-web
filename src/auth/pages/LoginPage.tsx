import { useState } from "react";

import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

import type { LoginFormValues } from "../schemas/login.schema";
import { authApi } from "../../api/auth";

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (data: LoginFormValues) => {
    try {
      setIsSubmitting(true);

      const response = await authApi.login(data);

      console.log(response.data);

      // TODO: Save token

      // TODO: Navigate to dashboard
    } catch (error) {
      console.error("Error signing in:", error);
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
