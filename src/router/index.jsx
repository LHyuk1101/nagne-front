import {Route, Routes} from "react-router-dom";

import Main from "../pages/Ex123.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
        </Routes>
    )
}

export default Router;