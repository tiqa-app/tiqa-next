import clsx from "clsx";

const Backdrop = ({ className, onClick, visible }) => {
  return (
    <div
      className={clsx("backdrop", visible && "visible", className)}
      onClick={onClick}
    ></div>
  );
};

Backdrop.displayName = "Backdrop";

export default Backdrop;
