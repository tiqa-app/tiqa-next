import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layouts/Layout";
import { FavoriteProvider } from "../components/providers/favorites";
import { DisplayModeProvider } from "../components/providers/displayMode";
import { InstallPromptProvider } from "../components/providers/installPrompt";
import ConsentModal from "../components/ConsentModal";
import * as gtag from "../lib/gtag";
import * as sentry from "../lib/sentry";
import registerServiceWorker from "../register-service-worker";
import "../styles/app.scss";

sentry.init();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showCookiesModal, setShowCookiesModal] = useState(undefined);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    registerServiceWorker();
  }, []);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted") || false;
    setShowCookiesModal(!cookiesAccepted);
  }, []);

  const acceptCookies = () => {
    setShowCookiesModal(false);
    localStorage.setItem("cookiesAccepted", true);
  };

  return (
    <InstallPromptProvider>
      <DisplayModeProvider>
        <FavoriteProvider>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
          {showCookiesModal !== undefined && (
            <ConsentModal onConfirm={acceptCookies} show={showCookiesModal} />
          )}
        </FavoriteProvider>
      </DisplayModeProvider>
    </InstallPromptProvider>
  );
}

export default MyApp;
