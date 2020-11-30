import clsx from "clsx";
import Container from "./Container";

const Navbar = ({ children, className }) => {
  return (
    <nav className={clsx("navbar", className)}>
      <Container>{children}</Container>
    </nav>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;
