import FormBuilderNav from "@/components/FormBuilderNav";
import Navbar from "@/components/Navbar";
import React from "react";

const BuilderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <FormBuilderNav /> */}
      <div className=" flex-grow">{children}</div>
    </div>
  );
};

export default BuilderLayout;
