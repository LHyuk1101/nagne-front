import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const LoadingBar = ({ open, message }) => {
  return (
    <Dialog open={open} aria-labelledby="loading-dialog-title">
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center" p={3}>
          <CircularProgress size={60} />
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

export default LoadingBar;
