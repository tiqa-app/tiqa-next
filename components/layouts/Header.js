import Link from "next/link";
import Container from "../core/Container";
import Nav from "../core/Nav";
import Navbar from "../core/Navbar";
import Title from "../core/Title";
import MenuIcon from "../icons/MenuIcon";

const Header = ({ activeTab, back, onMenuClick, tabs, title }) => {
  return (
    <header className="border-bottom">
      <Navbar>
        <MenuIcon className="menu-icon" onClick={onMenuClick} />
        <Title className="header-title mb-0" variant="h1">
          {title}
        </Title>
        <div>
          {back && (
            <Link href={back} passHref>
              <a>back</a>
            </Link>
          )}
        </div>
      </Navbar>
      {tabs && (
        <Container>
          <Nav className="header-tabs small" tabs value={activeTab}>
            {tabs.map((tab) => (
              <Nav.Link href={tab.link} key={tab.slug} value={tab.slug}>
                {tab.label}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      )}
    </header>
  );
};

Header.displayName = "Header";

export default Header;
