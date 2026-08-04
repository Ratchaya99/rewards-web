import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import RegisterForm from "../components/RegisterForm";

import type { RegisterFormValues } from "../schemas/register.schema";
import { useSnackbar } from "notistack";
import { getApiErrorMessage } from "../../utils/get-api-error-message";
import { authApi } from "../../api/auth";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleRegister = async (data: RegisterFormValues) => {
    try {
      setIsSubmitting(true);

      await authApi.register({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      });

      setOpenSuccessDialog(true);
    } catch (error) {
      enqueueSnackbar(getApiErrorMessage(error), {
        variant: "error",
      });

      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoToLogin = () => {
    setOpenSuccessDialog(false);
    navigate("/login");
  };

  return (
    <>
      <AuthLayout
        heroTitle="Create an Account"
        heroDescription="Join our community and start earning rewards today!"
      >
        <RegisterForm isSubmitting={isSubmitting} onSubmit={handleRegister} />
      </AuthLayout>

      <Dialog
        open={openSuccessDialog}
        maxWidth="xs"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 4,
              p: 1,
            },
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            pt: 4,
            pb: 2,
            gap: 1,
          }}
        >
          <CheckCircleRoundedIcon
            sx={{
              width: 72,
              height: 72,
              color: "success.main",
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
            }}
          >
            Account Created!
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 320,
            }}
          >
            Your account has been created successfully.
          </Typography>
        </DialogContent>

        <DialogActions
          sx={{
            px: 3,
            pb: 3,
          }}
        >
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleGoToLogin}
            sx={{
              py: 1.4,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Go to Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
