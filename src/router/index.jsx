import {Route, Routes} from "react-router-dom";

import LoginPage from "../pages/LoginPage.jsx";
import Main from "../pages/Main.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}

export default Router;