import clsx from "clsx";

const Row = ({ children, className, reverse }) => {
  return (
    <div className={clsx("row", reverse && "reverse", className)}>
      {children}
    </div>
  );
};

Row.displayName = "Row";

export default Row;
