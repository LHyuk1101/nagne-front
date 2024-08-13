import { useState } from "react";

export const useWarningDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openWarningDialog = (warningMessage) => {
    setMessage(warningMessage);
    setIsOpen(true);
  };

  const closeWarningDialog = () => {
    setIsOpen(false);
  };

  return { isOpen, message, openWarningDialog, closeWarningDialog };
};
