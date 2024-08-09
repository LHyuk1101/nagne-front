import "../styles/reset.css";
import { Outlet } from "react-router-dom";
import DefaultLayout from "../components/Layout/DefaultLayout.jsx";
import { PlanContextProvider } from "../store/PlanContext.jsx";

function App() {
  return (
    <DefaultLayout>
      <PlanContextProvider>
        <Outlet />
      </PlanContextProvider>
    </DefaultLayout>
  );
}

export default App;
