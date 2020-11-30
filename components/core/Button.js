import clsx from "clsx";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    { block, children, className, icon: Icon, href, onClick, size, type },
    ref
  ) => {
    const Component = href ? "a" : "button";
    return (
      <Component
        className={clsx(
          "btn",
          block && "btn-block",
          size && `btn-${size}`,
          type,
          className
        )}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        {Icon && <Icon className="mr-1" size={size === "sm" ? 15 : 18} />}
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
