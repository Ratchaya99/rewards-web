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

import AuthLayout from "../components/AuthLayout";
import RegisterForm from "../components/RegisterForm";

import type { RegisterFormValues } from "../schemas/register.schema";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleRegister = async (data: RegisterFormValues) => {
    console.log(data);

    try {
      setIsSubmitting(true);

      // TODO: Call register API here
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setOpenSuccessDialog(true);
    } catch (error) {
      console.error("Error creating account:", error);
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
      <AuthLayout>
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
