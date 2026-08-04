import { Navigate, Outlet } from "react-router-dom";

import { authStorage } from "../services/auth-storage";

export default function PublicRoute() {
  const accessToken = authStorage.getAccessToken();

  if (accessToken) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
