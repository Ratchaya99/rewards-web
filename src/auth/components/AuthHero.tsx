import { Box, Stack, Typography } from "@mui/material";
import giftBoxImage from "../../assets/images/gift_box.png";

interface AuthHeroProps {
  title?: string;
  description?: string;
}

export default function AuthHero(props: AuthHeroProps) {
  const {
    title = "Rewards Platform",
    description = "Sign in to continue managing your loyalty program and rewards.",
  } = props;

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
          {title}
        </Typography>

        <Typography variant="h6" color="text.secondary">
          {description}
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
