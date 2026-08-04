import { Navigate, Outlet } from "react-router-dom";

import { authStorage } from "../services/auth-storage";

export default function ProtectedRoute() {
  const accessToken = authStorage.getAccessToken();

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
