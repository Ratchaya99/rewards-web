import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function LoginForm() {
  return (
    <Card
      elevation={0}
      sx={{
        width: 500,
        borderRadius: 4,
        p: 1,
        border: 1,
        borderColor: "grey.200",
        boxShadow: (theme) => theme.shadows[6],
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Stack spacing={4}>
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                bgcolor: "primary.main",
                color: "common.white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardGiftcardRoundedIcon fontSize="large" />
            </Box>

            <Stack
              spacing={1}
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                }}
              >
                Welcome Back
              </Typography>

              <Typography color="text.secondary">
                Sign in to Rewards Platform
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <TextField fullWidth label="Email" placeholder="Enter your email" />

            <TextField
              fullWidth
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
          </Stack>

          <FormControlLabel control={<Checkbox />} label="Remember me" />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              py: 1.4,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Sign In
          </Button>

          <Divider>OR</Divider>

          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{
              py: 1.4,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Create Account
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
