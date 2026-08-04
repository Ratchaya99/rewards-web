import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Outlet />
    </Box>
  );
}
