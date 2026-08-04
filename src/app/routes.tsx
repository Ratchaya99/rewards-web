import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "../auth/pages/LoginPage";
import RegisterPage from "../auth/pages/RegisterPage";
import ProtectedRoute from "../auth/routes/ProtectedRoute";
import PublicRoute from "../auth/routes/PublicRoute";

import DashboardLayout from "../dashboard/layouts/DashboardLayout";
import DashboardPage from "../dashboard/pages/DashboardPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Guest Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
