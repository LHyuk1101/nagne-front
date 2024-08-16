import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/useUserStore";
import { Container, Typography, Box } from "@mui/material";
import FacebookLogo from "../../assets/images/logo/Facebook_login_icon.svg";
import GoogleLogo from "../../assets/images/logo/google_login_icon.svg";
import LINKS from "../../routes/Links.jsx";
import usePlanStore from "../../store/PlanContext.js";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const handleSocialMediaAccountLogin = (selectedSocialMedia) => () => {
  const socialMediaURLs = {
    Google: `${baseURL}/api/login/oauth2/authorization/google`,
    Facebook: `${baseURL}/api/login/oauth2/authorization/facebook`,
  };

  const apiCallURL = socialMediaURLs[selectedSocialMedia];
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
  const { placeName } = usePlanStore();

  useEffect(() => {
    const handleAuthComplete = (event) => {
      if (event.origin === `${baseURL}` && event.data) {
        const { accessToken, userId, nickname, email, role, userProfileImg } =
          event.data;
        localStorage.setItem("accessToken", accessToken);
        setUser({ userId, nickname, email, role, userProfileImg });

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
        <img
          src={FacebookLogo}
          alt="FacebookLogo"
          onClick={handleSocialMediaAccountLogin("Facebook")}
          style={{
            cursor: "pointer",
            height: "60px",
            marginRight: "10px",
          }}
        />
        <img
          src={GoogleLogo}
          alt="GoogleLogo"
          onClick={handleSocialMediaAccountLogin("Google")}
          style={{
            cursor: "pointer",
            height: "60px",
            marginRight: "10px",
          }}
        />
      </Box>
    </Container>
  );
};

export default LoginPage;
