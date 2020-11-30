import Button from "./core/Button";
import Modal from "./core/Modal";
import Text from "./core/Text";
import Title from "./core/Title";

const ConsentModal = ({ onConfirm, show }) => {
  return (
    <Modal show={show}>
      <Modal.Body className="text-center">
        <img
          className="mb-5 mt-4"
          src="/img/illustrations/undraw_cookie_love.svg"
          alt="confirmation illustration"
          height="120"
          width="142"
        />
        <div className="py-3">
          <Title variant="h4">Accept cookies?</Title>
          <Text className="mb-0 mt-2" small>
            By clicking "Accept", you agree to the storing of cookies on your
            device to enhance site navigation and analyse site usage.
          </Text>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button block onClick={onConfirm} type="primary">
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ConsentModal.displayName = "ConsentModal";

export default ConsentModal;
