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
  TRAVEL_INFO: {
    path: "/travel/info",
    link: "/travel/info",
  },
  TEMPLATE: {
    path: "/template",
    link: "/template",
  },
  TEMPLATE_DETAIL: {
    path: "/template/:templateId",
    link: "/template/",
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
    link: "/plan/",
  },
  PLACE: {
    path: "/place/:id",
    link: "/place",
  },
  POLICY: {
    path: "/user-privacy-policy",
    link: "/user-privacy-policy",
  },
  USER_TOS: {
    path: "/user-termsofservice",
    link: "/user-termsofservice",
  },
};

export default LINKS;
