import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";

import {
  registerSchema,
  type RegisterFormValues,
} from "../schemas/register.schema";

interface RegisterFormProps {
  isSubmitting: boolean;
  onSubmit: SubmitHandler<RegisterFormValues>;
}

export default function RegisterForm({
  isSubmitting,
  onSubmit,
}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleFormSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    await onSubmit(data);
    reset();
  };

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Stack
          component="form"
          spacing={4}
          onSubmit={handleSubmit(handleFormSubmit)}
        >
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
                    Create Account
                  </Typography>

                  <Typography color="text.secondary">
                    Create your Rewards Platform account
                  </Typography>
                </Stack>
              </Stack>

              <Stack spacing={2}>
                <TextField
                  label="First Name"
                  placeholder="Enter your first name"
                  autoComplete="given-name"
                  {...register("firstName")}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />

                <TextField
                  label="Last Name"
                  placeholder="Enter your last name"
                  autoComplete="family-name"
                  {...register("lastName")}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />

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
                  autoComplete="new-password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />

                <TextField
                  type="password"
                  label="Confirm Password"
                  autoComplete="new-password"
                  {...register("confirmPassword")}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                />
              </Stack>

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
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  textAlign: "center",
                }}
              >
                Already have an account?{" "}
                <Typography
                  component={RouterLink}
                  to="/login"
                  sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    fontWeight: 600,
                    pointerEvents: isSubmitting ? "none" : "auto",
                    opacity: isSubmitting ? 0.5 : 1,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Sign In
                </Typography>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
