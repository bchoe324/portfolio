import { Outlet } from "react-router-dom";
import Cursor from "./Cursor";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <>
      {isMobile ? null : <Cursor />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
