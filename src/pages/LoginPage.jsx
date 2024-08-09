import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";
import { Container, Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const handleSocialMediaAccountLogin = (selectedSocialMedia) => () => {
  let apiCallURL = "";
  console.log(selectedSocialMedia);
  switch (selectedSocialMedia) {
    case "Google":
      apiCallURL = `${baseURL}/api/login/oauth2/authorization/google`;
      break;
    case "Facebook":
      apiCallURL = `${baseURL}/api/login/oauth2/authorization/facebook`;
      break;
    default:
      console.error("Unknown SocialMedia", selectedSocialMedia);
      return;
  }

  console.log(apiCallURL);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const left = window.screenX;
  const top = window.screenY;

  const authWindow = window.open(
    apiCallURL,
    "_blank",
    `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=yes`,
  );

  if (authWindow) {
    authWindow.focus();
  }
};

const LoginPage = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const handleAuthComplete = (event) => {
      if (event.origin === `${baseURL}` && event.data) {
        const { accessToken, userId, name, email, role } = event.data;
        localStorage.setItem("accessToken", accessToken);
        setUser({ userId, name, email, role });

        window.location.href = "/";
      }
    };

    window.addEventListener("message", handleAuthComplete);

    return () => {
      window.removeEventListener("message", handleAuthComplete);
    };
  }, [navigate, setUser]);

  return (
    <Container style={{ textAlign: "center", marginTop: "10.5rem" }}>
      <Typography variant="h3" gutterBottom>
        Welcom to Nagne!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Sign in with
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <FacebookIcon
          onClick={handleSocialMediaAccountLogin("Facebook")}
          style={{ fontSize: 80, cursor: "pointer", marginRight: "1rem" }}
        />
        <GoogleIcon
          onClick={handleSocialMediaAccountLogin("Google")}
          style={{ fontSize: 80, cursor: "pointer" }}
        />
      </Box>
    </Container>
  );
};

export default LoginPage;
