import { Box, Stack, Typography } from "@mui/material";
import giftBoxImage from "../../assets/images/gift_box.png";

export default function LoginHero() {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 8,
        textAlign: "center",
        background: "linear-gradient(180deg,#F8F7FF 0%, #EEE9FF 100%)",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: 48,
          }}
        >
          Rewards Platform
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Sign in to continue managing your loyalty program and rewards.
        </Typography>

        <Box
          component="img"
          src={giftBoxImage}
          alt="Gift Box"
          sx={{
            width: "100%",
            maxWidth: 400,
            objectFit: "contain",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </Stack>
    </Box>
  );
}
