import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage.jsx";
import Home from "../pages/Home.jsx";
import ModernCustomTemplate from "../pages/ModernCustomTemplate.jsx";
import CreatePlan from "../pages/CreatePlan.jsx";
import PlanFirst from "../pages/PlanFirst.jsx";
import Plan from "../pages/Plan.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import LINKS from "./Links.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path={LINKS.HOME.path} element={<Home />} />
      <Route path={LINKS.LOGIN.path} element={<LoginPage />} />
      <Route path={LINKS.PLAN.path} element={<Plan />} />
      <Route path="/ModernCustomTemplate" element={<ModernCustomTemplate />} />
      <Route path={LINKS.CREATE.path} element={<CreatePlan />} />
      <Route path="plan/:location" element={<PlanFirst />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
