import { ReactNode } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <div className="p-0 pt-14 sm:ml-64">{children}</div>
    </>
  );
}

export default MainLayout;
