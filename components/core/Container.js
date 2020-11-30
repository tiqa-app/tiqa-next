import clsx from "clsx";

const Container = ({ children, className }) => {
  return <div className={clsx("container", className)}>{children}</div>;
};

Container.displayName = "Container";

export default Container;
