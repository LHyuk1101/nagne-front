import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LINKS from "../routes/Links.jsx";

const usePreventRefresh = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "F5") {
        event.preventDefault();
        const confirmed = window.confirm(
          "Are you sure you want to leave? Your changes may be lost.",
        );
        if (confirmed) {
          navigate(LINKS.CREATE.path);
        }
      }
    };

    const handleBeforeUnload = (e) => {
      const message =
        "Are you sure you want to leave? Your changes may be lost.";
      e.returnValue = message;
      return message;
    };

    const handleUnload = () => {
      sessionStorage.setItem("redirectToCreate", "true");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleUnload);

    if (sessionStorage.getItem("redirectToCreate") === "true") {
      sessionStorage.removeItem("redirectToCreate");
      navigate(LINKS.CREATE.path, { replace: true });
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleUnload);
    };
  }, [navigate]);
};

export default usePreventRefresh;
