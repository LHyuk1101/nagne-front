import "../styles/reset.css";
import { Outlet } from "react-router-dom";
import DefaultLayout from "../components/Layout/DefaultLayout.jsx";

function App() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}

export default App;
