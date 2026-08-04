import { Box, Paper } from "@mui/material";
import type { ReactNode } from "react";

import AuthHero from "../components/AuthHero";
import backgroundImage from "../../assets/images/background.png";

interface AuthLayoutProps {
  children: ReactNode;
  heroTitle?: string;
  heroDescription?: string;
}

export default function AuthLayout({
  children,
  heroTitle,
  heroDescription,
}: AuthLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        backgroundImage: `url(${backgroundImage})`,
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
          minHeight: 600,
          maxHeight: "calc(100vh - 48px)",
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
        <AuthHero title={heroTitle} description={heroDescription} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
            bgcolor: "background.paper",
          }}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
}
