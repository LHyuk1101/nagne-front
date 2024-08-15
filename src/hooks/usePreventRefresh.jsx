import { useMemo, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LINKS from "../routes/Links.jsx";

const usePreventRefresh = () => {
  const navigate = useNavigate();

  const handlers = useMemo(() => {
    const handleKeyDown = (event) => {
      if (event.code === "F5") {
        event.preventDefault();
        const confirmed = window.confirm(
          "Are you sure you want to leave? Your changes may be lost.",
        );
        if (confirmed) {
          sessionStorage.removeItem("redirectToCreate");
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

    return { handleKeyDown, handleBeforeUnload, handleUnload };
  }, [navigate]);

  const checkRedirect = useCallback(() => {
    if (sessionStorage.getItem("redirectToCreate") === "true") {
      sessionStorage.removeItem("redirectToCreate");
      navigate(LINKS.CREATE.path, { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    window.addEventListener("keydown", handlers.handleKeyDown);
    window.addEventListener("beforeunload", handlers.handleBeforeUnload);
    window.addEventListener("unload", handlers.handleUnload);

    checkRedirect();

    return () => {
      window.removeEventListener("keydown", handlers.handleKeyDown);
      window.removeEventListener("beforeunload", handlers.handleBeforeUnload);
      window.removeEventListener("unload", handlers.handleUnload);
    };
  }, [handlers, checkRedirect]);
};

export default usePreventRefresh;
