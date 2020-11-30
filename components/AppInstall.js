import Button from "./core/Button";
import Card from "./core/Card";
import Text from "./core/Text";
import Title from "./core/Title";
import { useDisplayMode } from "./providers/displayMode";
import { useInstallPrompt } from "./providers/installPrompt";

const AppInstall = () => {
  const standalone = useDisplayMode();
  const deferredPrompt = useInstallPrompt();

  const promptInstall = () => {
    // Show the prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  };

  if (!deferredPrompt || standalone) {
    return null;
  }

  return (
    <Card className="bg-light border-0 mt-3 mx-3">
      <Card.Body className="w-100">
        <div className="d-flex align-items-center">
          <img
            className="rounded mr-2"
            src="/logo-square.svg"
            alt="app logo"
            height={40}
            width={40}
          />
          <div>
            <Title className="mb-0" variant="h5">
              Discover the app
            </Title>
            <Text className="mb-0" smaller>
              Discover the app
            </Text>
          </div>
        </div>
        <Button
          block
          className="mt-4"
          onClick={promptInstall}
          size="sm"
          type="primary"
        >
          Install
        </Button>
      </Card.Body>
    </Card>
  );
};

AppInstall.displayName = "AppInstall";

export default AppInstall;
