import { useState } from "react";

import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

import type { LoginFormValues } from "../schemas/login.schema";

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (data: LoginFormValues) => {
    console.log(data);

    try {
      setIsSubmitting(true);

      // TODO: Call login API
      await new Promise((resolve) => setTimeout(resolve, 2000));

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
