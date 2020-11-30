import clsx from "clsx";

const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  listtitle: "span",
  navtitle: "span",
};

const Title = ({ children, className, tag, variant = "h1" }) => {
  const Component = tag || defaultVariantMapping[variant];
  return <Component className={clsx(variant, className)}>{children}</Component>;
};

Title.displayName = "Title";

export default Title;
