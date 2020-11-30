import clsx from "clsx";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Title from "./Title";

const ModalBody = ({ children, className }) => {
  return <div className={clsx("modal-body", className)}>{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div className={"modal-footer"}>{children}</div>;
};

const ModalHeader = ({ children }) => {
  return <div className={"modal-header"}>{children}</div>;
};

const ModalTitle = ({ children }) => {
  return (
    <Title className="mb-0" variant="h3">
      {children}
    </Title>
  );
};

const Modal = ({ children, onClose, show }) => {
  return ReactDOM.createPortal(
    <div
      className={clsx("modal", show && "d-block")}
      tabIndex="-1"
      aria-hidden={!show}
    >
      <div
        className={clsx(
          "modal-dialog modal-dialog-centered modal-dialog-scrollable"
        )}
      >
        <div className="modal-content">{children}</div>
      </div>
      <Backdrop onClick={onClose} visible={show} />
    </div>,
    document.body
  );
};

Modal.displayName = "Modal";
ModalBody.displayName = "ModalBody";
ModalFooter.displayName = "ModalFooter";
ModalHeader.displayName = "ModalHeader";
ModalTitle.displayName = "ModalTitle";

Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;

export default Modal;
