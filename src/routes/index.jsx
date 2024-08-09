import { Route, Routes } from "react-router-dom";
import "../styles/index.css";
import LINKS from "./Links.jsx";

//home
import Home from "../pages/home/Home.jsx";
//user
import LoginPage from "../pages/user/LoginPage.jsx";
import MyPage from "../pages/user/MyPage.jsx";
//plan
import CreatePlan from "../pages/plan/CreatePlan.jsx";
import PlanFirst from "../pages/plan/PlanFirst.jsx";
import Plan from "../pages/plan/Plan.jsx";
//templete
import TemplateMain from "../pages/templete/TemplateMain.jsx";
import ModernCustomTemplate from "../pages/templete/TemplateDetail.jsx";
//travel-Info
import TravelInfo from "../pages/travelInfo/TravelInfo.jsx";
import TravelInfoMore from "../pages/travelInfo/TravelInfoMore.jsx";
//place
import PlaceDetail from "../pages/place/PlaceDetail.jsx";
//error
import ErrorPage from "../pages/error/ErrorPage.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path={LINKS.HOME.path} element={<Home />} />
      <Route path={LINKS.LOGIN.path} element={<LoginPage />} />
      <Route path={LINKS.CREATE.path} element={<CreatePlan />} />
      <Route path={LINKS.PLAN_FIRST.path} element={<PlanFirst />} />
      <Route path={LINKS.PLAN.path} element={<Plan />} />
      <Route path={LINKS.TEMPLATE.path} element={<TemplateMain />} />
      <Route path={LINKS.TEMPLATE_DETAIL.path} element={<ModernCustomTemplate />} />
      <Route path={LINKS.MYPAGE.path} element={<MyPage />} />
      <Route path={LINKS.TRAVEL.path} element={<TravelInfo />} />
      <Route path={LINKS.PLACE.path} element={<PlaceDetail />} />
      <Route path={LINKS.TRAVEL_INFO.path} element={<TravelInfoMore />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
