import clsx from "clsx";

const Text = ({
  bold,
  children,
  className,
  color,
  small,
  smaller,
  tag: Tag = "p",
}) => {
  return (
    <Tag
      className={clsx(
        color && `text-${color}`,
        small && "small",
        smaller && "smaller",
        bold && "bold",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Text;
