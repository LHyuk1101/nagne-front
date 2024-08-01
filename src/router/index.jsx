import {Route, Routes} from "react-router-dom";

import LoginPage from "../pages/LoginPage.jsx";
import Home from "../pages/Home.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}

export default Router;