import { ReactNode } from "react";
import SideBar from "./SideBar";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <SideBar></SideBar>
      <div className="p-0 pt-0 sm:ml-64">{children}</div>
    </>
  );
}

export default MainLayout;
