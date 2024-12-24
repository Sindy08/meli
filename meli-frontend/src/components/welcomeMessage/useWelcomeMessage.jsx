import { useState, useEffect } from "react";

const useWelcomeMessage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowWelcome(false);
    }
  }, []);

  const handleClose = () => {
    setShowWelcome(false);
    localStorage.setItem("hasVisited", "true");
  };

  return {
    showWelcome,
    handleClose,
  };
};

export default useWelcomeMessage;
