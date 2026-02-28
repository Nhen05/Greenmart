import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>           
      <Header />
      <main>
        <Outlet /> {/* Outlet sẽ hiển thị nội dung các Route con */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
