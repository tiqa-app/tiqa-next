import clsx from "clsx";
import Link from "next/link";
import { MENU_ITEMS } from "../../constants/navigation";
import Nav from "../core/Nav";
import Title from "../core/Title";
import AppInstall from "../AppInstall";
import Brand from "./Brand";

const Sidebar = ({ open }) => {
  return (
    <aside className={clsx("sidebar", open && "open")}>
      <Link href="/" passHref>
        <a className="sidebar-brand" href="/">
          <Brand />
        </a>
      </Link>
      {MENU_ITEMS.map((section) => (
        <section className="mb-3" key={section.key}>
          <Title variant="navtitle">{section.label}</Title>
          <Nav vertical>
            {section.links.map(({ icon: Icon, key, label, path }) => (
              <Nav.Link href={path} key={key}>
                <Icon className="mr-2" size={20} />
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </section>
      ))}
      <AppInstall />
    </aside>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
