import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import RightSideMenu from "../UI/RightSideMenu.jsx";
import Box from "@mui/material/Box";
import logo from "../../assets/images/nagne_logo.png";
import titleLogo from "../../assets/images/nagne_title_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  // 로그인 시 setIsLoggedIn을 핸들링 할 함수.
  const manageLoggedInUser = () => {
    return null;
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "white",
          color: "#464555",
          borderBottom: "1px solid #E0E0E0",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            padding: "0 16px",
            minHeight: "56px",
            "& .MuiToolbar-root": {
              minHeight: "56px",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "46px",
                marginRight: "10px",
              }}
            />
            <Link to={"/"}>
              <Typography variant="h6" component="div">
                <img
                  src={titleLogo}
                  alt="titleLogo"
                  style={{
                    height: "50px",
                    marginRight: "10px",
                  }}
                />
              </Typography>
            </Link>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              outline: "none",
              border: "none",
              "&:focus": {
                outline: "none",
                border: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <RightSideMenu
        isLoggedIn={isLoggedIn}
        open={open}
        onClose={toggleDrawer(false)}
      />
    </>
  );
};

export default Header;
