import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore.js";
import TemplateIcon from "@mui/icons-material/Dashboard.js";
import ForumIcon from "@mui/icons-material/Forum.js";
import SupportIcon from "@mui/icons-material/Support.js";
import LINKS from "../../routes/Links.jsx";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

/**
 * @typedef {Object} NaviItem
 * @property {string} text - 화면에서 보이는 메뉴 Text
 * @property {string} route - route 주소
 * @property {boolean|null} isLogin - login 상태인지 확인. true = 로그인중, false = 로그인 이전, null = 기본으로 보여줘야할 데이터
 */

/** @type {NaviItem[]} */
const NaviItemsTop = [
  {
    text: "Login",
    route: LINKS.LOGIN.path,
    isLogin: false,
    icon: <LoginIcon />,
  },
  {
    text: "Logout",
    route: LINKS.LOGOUT.path,
    isLogin: true,
    icon: <LogoutIcon />,
  },
  {
    text: "MyPage",
    route: LINKS.MYPAGE.path,
    isLogin: true,
    icon: <PersonIcon />,
  },
];
/**
 * @typedef {Object} NaviItem
 * @property {string} text - 화면에서 보이는 메뉴 Text
 * @property {string} route - route 주소
 * @property {boolean|null} isLogin - login 상태인지 확인. true = 로그인중, false = 로그인 이전, null = 기본으로 보여줘야할 데이터
 */

/** @type {NaviItem[]} */
const NaviItemsBottom = [
  {
    icon: <ExploreIcon />,
    text: "Travel Info",
    route: LINKS.TRAVEL.path,
  },
  {
    icon: <TemplateIcon />,
    text: "Templates",
    route: LINKS.TEMPLATE.path,
  },
  // {
  //   icon: <ForumIcon />,
  //   text: "Community",
  //   route: LINKS.COMMUNITY.path,
  // },
  {
    icon: <SupportIcon />,
    text: "Support",
    route: LINKS.SUPPORT.path,
  },
];

/**
 * RightSideMenu component
 *
 * @param {Object} props - Component props
 * @param {boolean} props.open - Whether the drawer is open
 * @param {Function} props.onClose - Function to close the drawer
 * @param {boolean} props.isLoggedIn - Whether the user is logged in
 * @returns {JSX.Element} RightSideMenu component
 */
const RightSideMenu = ({ open, onClose, isLoggedIn }) => {
  const renderNavItems = (items) => {
    return items.map((item) => (
      <ListItem key={item.text} disablePadding>
        <ListItemButton component={Link} to={item.route}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    ));
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {renderNavItems(
          NaviItemsTop.filter((item) => item.isLogin === isLoggedIn),
        )}
      </List>
      <Divider />
      <List>{renderNavItems(NaviItemsBottom)}</List>
    </Box>
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      {list()}
    </Drawer>
  );
};

export default RightSideMenu;
