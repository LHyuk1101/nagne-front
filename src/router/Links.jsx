const LINKS = {
  HOME: {
    path: "/",
    link: "/",
  },
  LOGIN: {
    path: "/login",
    link: "/auth/login",
  },
  LOGOUT: {
    path: "/logout",
    link: "/auth/logout",
  },
  CREATE: {
    path: "/create",
    link: "/create",
  },
  PLAN: {
    path: "/plan",
    link: "/plan",
  },
  MYPAGE: {
    path: "/user/mypage",
    link: "/user/mypage",
  },
  TRAVEL: {
    path: "/travel",
    link: "/travel",
  },
  TEMPLATE: {
    path: "/template",
    link: "/template",
  },
  COMMUNITY: {
    path: "/community",
    link: "/community",
  },
  SUPPORT: {
    path: "/support",
    link: "/support",
  },
  PLAN_FIRST: {
    path: "/plan/:location",
    link: "/plan",
  },
};

export default LINKS;
