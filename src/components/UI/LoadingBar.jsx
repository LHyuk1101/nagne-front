import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const LoadingDialog = ({ open, message, gifSrc }) => {
  return (
    <Dialog open={open} aria-labelledby="loading-dialog-title">
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center" p={3}>
          <Box position="relative" display="inline-flex">
            <CircularProgress size={60} />
            <Box
              position="absolute"
              top={0}
              left={0}
              bottom={0}
              right={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={gifSrc}
                alt="Loading..."
                style={{ width: 40, height: 40 }}
              />
            </Box>
          </Box>
          <Typography variant="h6" style={{ marginTop: 20 }}>
            {message || "Loading..."}
          </Typography>
          <Typography variant="body2" style={{ marginTop: 10 }}>
            This may take a few moments. Please wait.
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingDialog;
