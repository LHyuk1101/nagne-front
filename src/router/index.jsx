import {Route, Routes} from "react-router-dom";

import LoginPage from "../pages/LoginPage.jsx";
import Home from "../pages/Home.jsx";
import CreatePlan from "../pages/CreatePlan.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/create" element={<CreatePlan/>}/>
        </Routes>
    )
}

export default Router;