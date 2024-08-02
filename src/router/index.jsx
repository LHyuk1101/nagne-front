import {Route, Routes} from "react-router-dom";

import LoginPage from "../pages/LoginPage.jsx";
import Home from "../pages/Home.jsx";
import Plan from "../pages/Plan.jsx";
// import MyPage from "../pages/MyPage.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/plan" element={<Plan/>}/>
            {/*<Route path="/mypage" element={<MyPage/>}/>*/}
        </Routes>
    )
}

export default Router;