import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import RightSideMenu from "../UI/RightSideMenu.jsx";
import { WINDOW_MD_WIDTH_SIZE } from "../../constants/constant.js";
import Box from "@mui/material/Box";
import logo from "../../assets/images/nagne_logo.png";
import titleLogo from "../../assets/images/nagne_title_logo.png";
import { Link } from "react-router-dom";

/**
 * @typedef {Object} NaviItem
 * @property {string} text - 화면에서 보이는 메뉴 Text
 * @property {string} route - route 주소
 * @property {boolean|null} isLogin - login 상태인지 확인. true = 로그인중, false = 로그인 이전, null = 기본으로 보여줘야할 데이터
 */

/** @type {NaviItem[]} */
const NaviItems = [
  {
    text: "Travel Destinations",
    route: "/travel",
    isLogin: null,
  },
  {
    text: "Templates",
    route: "/templates",
    isLogin: null,
  },
  {
    text: "Community",
    route: "/community",
    isLogin: null,
  },
  {
    text: "Support",
    route: "/support",
    isLogin: null,
  },
  {
    text: "Login",
    route: "/login",
    isLogin: false,
  },
  {
    text: "Logout",
    route: "/logout",
    isLogin: true,
  },
];

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
            <Link to={'/'}>
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
