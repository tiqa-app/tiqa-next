import { createContext, useContext, useEffect, useState } from "react";

const DisplayModeContext = createContext();

export const DisplayModeProvider = ({ children }) => {
  const [displayMode, setDisplayMode] = useState(undefined);

  // Track how the PWA was launched
  useEffect(() => {
    let mode = "browser tab";

    if (navigator.standalone) {
      mode = "standalone-ios";
    }

    if (window.matchMedia("(display-mode: standalone)").matches) {
      mode = "standalone";
    }

    setDisplayMode(mode);
  }, []);

  const standalone =
    displayMode === "standalone" || displayMode === "standalone-ios"
      ? true
      : false;
  return (
    <DisplayModeContext.Provider value={standalone}>
      {children}
    </DisplayModeContext.Provider>
  );
};

export const useDisplayMode = () => useContext(DisplayModeContext);
