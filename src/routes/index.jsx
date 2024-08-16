import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/index.css";
import LINKS from "./Links.jsx";

import App from "../pages/App.jsx";
import Home from "../pages/home/Home.jsx";
//user
import LoginPage from "../pages/user/LoginPage.jsx";
import MyPage from "../pages/user/MyPage.jsx";
import Support from "../pages/user/Support.jsx";
//plan
import CreatePlan from "../pages/plan/CreatePlan.jsx";
import PlanFirst from "../pages/plan/PlanFirst.jsx";
import Plan from "../pages/plan/Plan.jsx";
import PlanComplete from "../pages/plan/PlanComplete.jsx";
//templete
import TemplateMain from "../pages/templete/TemplateMain.jsx";
import TemplateDetail from "../pages/templete/TemplateDetail.jsx";
//travel-Info
import TravelInfo from "../pages/travelInfo/TravelInfo.jsx";
import TravelInfoMore from "../pages/travelInfo/TravelInfoMore.jsx";
//place
import PlaceDetail from "../pages/place/PlaceDetail.jsx";
//error
import ErrorPage from "../pages/error/ErrorPage.jsx";
import PrivacyPolicy from "../pages/user/PrivacyPolicy.jsx";
import Agreements from "../pages/user/TermsOfService.jsx";
import TermsOfService from "../pages/user/TermsOfService.jsx";
import { LinkSharp } from "@mui/icons-material";

const router = createBrowserRouter([
  {
    path: LINKS.HOME.path,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: LINKS.LOGIN.path, element: <LoginPage /> },
      { path: LINKS.CREATE.path, element: <CreatePlan /> },
      {
        path: LINKS.PLAN.path,
        element: <Plan />,
        children: [
          { index: true, element: <PlanComplete /> },
          { path: ":location", element: <PlanFirst /> },
        ],
      },
      { path: LINKS.MYPAGE.path, element: <MyPage /> },
      { path: LINKS.TRAVEL.path, element: <TravelInfo /> },
      { path: LINKS.TEMPLATE.path, element: <TemplateMain /> },
      { path: LINKS.TEMPLATE_DETAIL.path, element: <TemplateDetail /> },
      { path: LINKS.TRAVEL_INFO.path, element: <TravelInfoMore /> },
      { path: LINKS.PLACE.path, element: <PlaceDetail /> },
      { path: LINKS.POLICY.path, element: <PrivacyPolicy /> },
      { path: LINKS.USER_TOS.path, element: <TermsOfService /> },
      { path: LINKS.SUPPORT.path, element: <Support /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
