import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/sidebar/Sidebar";
import Nav from "../components/shared/nav/Nav";
import LeftSidebar from "../components/shared/nav/LeftSidebar";
import { useState } from "react";

export default function Layout() {
  const [showMobileNav,setShowMobileNav] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar></Sidebar>
      <LeftSidebar
        handleSidebar={() => setShowMobileNav(!showMobileNav)}
        showMobileNav={showMobileNav}
      ></LeftSidebar>
      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        <Nav handleSidebar={() => setShowMobileNav(!showMobileNav)}></Nav>
        <main className="p-4 flex-grow overflow-y-auto">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}
