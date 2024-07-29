import {Route, Routes} from "react-router-dom";

import Main from "../pages/Main.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/main" element={<Main />} />
        </Routes>
    )
}

export default Router;