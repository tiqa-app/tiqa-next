import Button from "./Button";
import Modal from "./Modal";
import Text from "./Text";
import Title from "./Title";

const ConfirmModal = ({ description, message, onClose, onConfirm, show }) => {
  return (
    <Modal handleClose={onClose} show={show}>
      <Modal.Body className="text-center">
        <img
          className="mb-5 mt-4"
          src="/img/illustrations/undraw_right_direction.svg"
          alt="confirmation illustration"
          height="120"
          width="142"
        />
        <div className="py-3">
          <Title className="mb-0" variant="h4">
            {message}
          </Title>
          {description && (
            <Text className="mb-0 mt-2" small>
              {description}
            </Text>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button block onClick={onConfirm} type="primary">
          Confirm
        </Button>
        <Button block className="mt-2" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ConfirmModal.displayName = "ConfirmModal";

export default ConfirmModal;
