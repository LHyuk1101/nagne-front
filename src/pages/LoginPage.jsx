import React from "react";
import { Container, Typography, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const LoginPage = () => {
  const handleInstagramLogin = () => {
    // 인스타그램 로그인 api 호출..?
    window.location.href = "https://www.instagram.com/accounts/login/";
  };

  const handleGoogleLogin = () => {
    // 구글 로그인 로직 api 호출..?
    window.location.href = "https://accounts.google.com/signin";
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "10.5rem" }}>
      <Typography variant="h3" gutterBottom>
        Welcom to Nagne!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Sign in with
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <InstagramIcon
          onClick={handleInstagramLogin}
          style={{ fontSize: 80, cursor: "pointer", marginRight: "1rem" }}
        />
        <GoogleIcon
          onClick={handleGoogleLogin}
          style={{ fontSize: 80, cursor: "pointer" }}
        />
      </Box>
    </Container>
  );
};

export default LoginPage;
