import clsx from "clsx";
import { forwardRef } from "react";

const Badge = forwardRef(
  ({ children, className, onClick, type = "primary" }, ref) => {
    return (
      <span
        className={clsx("badge", type && `bg-${type}`, className)}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
