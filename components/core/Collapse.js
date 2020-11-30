import clsx from "clsx";

const Collapse = ({ children, className, open }) => {
  return (
    <div className={clsx(className, open ? "d-block" : "d-none")}>
      {children}
    </div>
  );
};

Collapse.displayName = "Collapse";

export default Collapse;
