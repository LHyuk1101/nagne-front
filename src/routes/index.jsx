import { Route, Routes } from "react-router-dom";
import "../styles/index.css";

import LoginPage from "../pages/LoginPage.jsx";
import Home from "../pages/Home.jsx";
import ModernCustomTemplate from "../pages/ModernCustomTemplate.jsx";
import CreatePlan from "../pages/plan/CreatePlan.jsx";
import PlanFirst from "../pages/plan/PlanFirst.jsx";
import Plan from "../pages/plan/Plan.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import LINKS from "./Links.jsx";
import TemplateMain from "../pages/TemplateMain.jsx";
import MyPage from "../pages/MyPage.jsx";
import TravelInfo from "../pages/TravelInfo.jsx";
import PlaceDetail from "../pages/PlaceDetail.jsx";
import TravelInfoMore from "../pages/TravelInfoMore.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path={LINKS.HOME.path} element={<Home />} />
      <Route path={LINKS.LOGIN.path} element={<LoginPage />} />
      <Route path={LINKS.PLAN.path} element={<Plan />} />
      <Route path="/ModernCustomTemplate" element={<ModernCustomTemplate />} />
      <Route path={LINKS.CREATE.path} element={<CreatePlan />} />
      <Route path={LINKS.PLAN_FIRST.path} element={<PlanFirst />} />
      <Route path={LINKS.TEMPLATE.path} element={<TemplateMain />} />
      <Route path={LINKS.MYPAGE.path} element={<MyPage />} />
      <Route path={LINKS.TRAVEL.path} element={<TravelInfo />} />
      <Route path="/place-detail" element={<PlaceDetail />} />
      <Route path="/TravelInfoMore" element={<TravelInfoMore />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
