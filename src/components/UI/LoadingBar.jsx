// LoadingDialog.js
import React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  CircularProgress,
  Typography,
  LinearProgress,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import loadingGif from "../../assets/images/loading/nagne_loading.gif";

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const LoadingDialog = ({
  open,
  message = "Creating the perfect schedule just for you!",
  useCustomGif = true,
}) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="loading-dialog-title"
      PaperProps={{
        style: { borderRadius: 15, padding: "20px 10px" },
      }}
    >
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          {useCustomGif ? (
            <img
              src={loadingGif}
              alt="Loading..."
              style={{ width: 200, height: 200 }} // GIF 크기를 100x100으로 설정
            />
          ) : (
            <CircularProgress size={60} />
          )}
          <Box mt={2} textAlign="center">
            <Typography
              variant="h6"
              sx={{
                animation: `${blinkAnimation} 1.5s infinite`,
              }}
            >
              {message}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              This may take a few moments. Please wait.
            </Typography>
            <Box width="100%" mt={2}>
              <LinearProgress />
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingDialog;
