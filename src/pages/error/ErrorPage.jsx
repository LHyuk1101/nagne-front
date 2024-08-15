import React from "react";
import { useRouteError } from "react-router-dom";
import { Box, Typography, Paper, Button, Container } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: "center",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
            borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "0 0 4px 0",
          }}
        >
          <ErrorOutlineIcon color="error" sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            An Error Occurred
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            We're sorry. An unexpected error has occurred.
          </Typography>
          <Box
            bgcolor="grey.100"
            p={2}
            borderRadius={1}
            textAlign="left"
            mb={3}
          >
            <Typography variant="body2" color="text.primary">
              <strong>Error code:</strong> {error.status || "Unknown"}
            </Typography>
            <Typography variant="body2" color="text.primary" mt={1}>
              <strong>Error message:</strong>{" "}
              {error.statusText || error.message || "Unknown error!"}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => (window.location.href = "/")}
          >
            Return to Home
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ErrorPage;
