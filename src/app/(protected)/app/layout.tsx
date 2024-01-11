import Navbar from "@/components/Navbar";
import RootSidebar from "@/components/RootSidebar";
import React from "react";

const LoggedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className=" flex min-h-screen ">
        <RootSidebar />
        {children}
      </div>
    </div>
  );
};

export default LoggedLayout;
