import clsx from "clsx";
import Link from "next/link";
import React, { forwardRef } from "react";

const Nav = ({ children, className, tabs, value, vertical }) => {
  return (
    <nav
      className={clsx(
        "nav",
        tabs && "nav-tabs",
        vertical && "flex-column",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        const childValue = child.props.value;
        return React.cloneElement(child, {
          active: childValue && childValue === value,
        });
      })}
    </nav>
  );
};

const NavLink = forwardRef(
  ({ active, children, className, href, onClick }, ref) => {
    return (
      <Link href={href} passHref>
        <a
          className={clsx("nav-link", active && "active", className)}
          href={href}
          onClick={onClick}
          ref={ref}
        >
          {children}
        </a>
      </Link>
    );
  }
);

Nav.displayName = "Nav";
NavLink.displayName = "NavLink";

Nav.Link = NavLink;

export default Nav;
