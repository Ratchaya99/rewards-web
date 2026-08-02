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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";

import { loginSchema, type LoginFormValues } from "../schemas/login.schema";

interface LoginFormProps {
  isSubmitting: boolean;
  onSubmit: SubmitHandler<LoginFormValues>;
}

export default function LoginForm({ isSubmitting, onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Stack component="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
          <Box
            component="fieldset"
            disabled={isSubmitting}
            sx={{
              border: 0,
              p: 0,
              m: 0,
              minWidth: 0,
            }}
          >
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
                    justifyContent: "center",
                    alignItems: "center",
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
                      color: "primary.main",
                    }}
                  >
                    Welcome Back!
                  </Typography>

                  <Typography color="text.secondary">
                    Sign in to Rewards Platform
                  </Typography>
                </Stack>
              </Stack>

              <Stack spacing={2}>
                <TextField
                  label="Email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />

                <TextField
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Stack>

              <FormControlLabel control={<Checkbox />} label="Remember me" />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={isSubmitting}
                sx={{
                  py: 1.4,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>

              <Divider>OR</Divider>

              <Button
                component={RouterLink}
                to="/register"
                fullWidth
                variant="outlined"
                size="large"
                disabled={isSubmitting}
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
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
