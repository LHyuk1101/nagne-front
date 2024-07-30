import {Route, Routes} from "react-router-dom";

import Main from "../pages/Ex123.jsx";
import LoginPage from "../pages/LoginPage.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}

export default Router;