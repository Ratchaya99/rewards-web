import { Box, Paper } from "@mui/material";
import type { ReactNode } from "react";

import AuthHero from "./AuthHero";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 1200,
          minHeight: 720,
          borderRadius: 4,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          boxShadow: (theme) => theme.shadows[12],
        }}
      >
        <AuthHero />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 6,
            bgcolor: "background.paper",
          }}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
}
