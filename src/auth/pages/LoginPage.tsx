import { Box, Paper } from "@mui/material";

import LoginForm from "../components/LoginForm";
import LoginHero from "../components/LoginHero";
import background from "../../assets/images/background.png";

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,

        backgroundImage: `url(${background})`,
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
          boxShadow: (theme) => theme.shadows[6],
        }}
      >
        <LoginHero />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 6,
            bgcolor: "white",
          }}
        >
          <LoginForm />
        </Box>
      </Paper>
    </Box>
  );
}
