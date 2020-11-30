import { createContext, useContext, useEffect, useState } from "react";

const InstallPromptContext = createContext();

export const InstallPromptProvider = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(undefined);

  useEffect(() => {
    function handleBeforeInstallPromptEvent(e) {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
    }

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPromptEvent
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPromptEvent
      );
    };
  }, []);

  return (
    <InstallPromptContext.Provider value={deferredPrompt}>
      {children}
    </InstallPromptContext.Provider>
  );
};

export const useInstallPrompt = () => useContext(InstallPromptContext);
