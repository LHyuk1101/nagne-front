import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/index.css";

import LoginPage from "../pages/LoginPage.jsx";
import Home from "../pages/Home.jsx";
import App from "../pages/App.jsx";
import CreatePlan from "../pages/plan/CreatePlan.jsx";
import PlanFirst from "../pages/plan/PlanFirst.jsx";
import Plan from "../pages/plan/Plan.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import LINKS from "./Links.jsx";
import TemplateMain from "../pages/TemplateMain.jsx";
import MyPage from "../pages/MyPage.jsx";
import TravelInfo from "../pages/TravelInfo.jsx";
import ModernCustomTemplate from "../pages/ModernCustomTemplate.jsx";
import PlanComplete from "../pages/plan/PlanComplete.jsx";

const router = createBrowserRouter([
  {
    path: LINKS.HOME.path,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: LINKS.LOGIN.path, element: <LoginPage /> },
      { path: LINKS.CREATE.path, element: <CreatePlan /> },
      { path: "/ModernCustomTemplate", element: <ModernCustomTemplate /> },
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
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
