import clsx from "clsx";

const Col = ({ children, className, offset, size }) => {
  return (
    <div
      className={clsx(
        size ? `col-${size}` : "col",
        offset && `offset-${offset}`,
        className
      )}
    >
      {children}
    </div>
  );
};

Col.displayName = "Col";

export default Col;
