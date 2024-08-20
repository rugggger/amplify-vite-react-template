// Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Outlet /> {/* This is where nested routes will be rendered */}
      <Footer></Footer>
    </>
  );
};

export default Layout;
