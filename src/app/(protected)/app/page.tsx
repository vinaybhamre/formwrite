import { Button } from "@/components/ui/button";
import { FormInput, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserForms = () => {
  return (
    <div className=" w-full p-12">
      <div className=" flex justify-between items-center">
        <div>
          <h1 className=" text-xl font-medium">Your Forms</h1>
          <p>view and manage your forms</p>
        </div>
        <Button className=" items-center" asChild>
          <Link href={`/forms/formId`}>
            <Plus className="mr-2 h-4 w-4" />
            <p className=" text-base">Create Form</p>
          </Link>
        </Button>
      </div>
      <div className=" w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center gap-5">
          <FormInput />
          There are no forms yet.
          <Button className=" items-center" asChild>
            <Link href={`/forms/formId`}>
              <Plus className="mr-2 h-4 w-4" />
              <p className=" text-base">Create Form</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForms;
