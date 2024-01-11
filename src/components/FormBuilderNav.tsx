import { EyeIcon, Settings } from "lucide-react";
import { Button } from "./ui/button";

const FormBuilderNav = () => {
  return (
    <div className=" flex justify-between items-center p-4 bg-slate-300/90">
      <div className=" text-2xl font-medium">My Form Name</div>
      <div>
        <div className=" flex items-center gap-4">
          <div>
            <Button variant="outline" size="icon">
              <EyeIcon className=" h-5 w-5" />
            </Button>
          </div>
          <div>
            <Button variant="outline">Save</Button>
          </div>
          <div>
            <Button variant="outline">Publish</Button>
          </div>
          <div>
            <Button variant="outline" size="icon">
              <Settings className=" h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilderNav;
