import React from "react";
import layout from "../layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
