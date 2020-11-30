import Head from "next/head";
import { useState } from "react";
import Backdrop from "../core/Backdrop";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ activeTab, back, children, tabs, title }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="layout">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Sidebar open={open} />
      <div className="content">
        <Header
          activeTab={activeTab}
          back={back}
          onMenuClick={handleToggle}
          tabs={tabs}
          title={title}
        />
        <main>{children}</main>
        <Footer />
      </div>
      <Backdrop
        className="layout-backdrop"
        onClick={handleClose}
        visible={open}
      />
    </div>
  );
};

Layout.displayName = "Layout";

export default Layout;
