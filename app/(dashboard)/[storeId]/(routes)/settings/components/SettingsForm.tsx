import Heading from "@/components/ui/Heading";
import { Store } from "@prisma/client";

interface SettingsFormProps {
  initialData: Store;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading 
        title="Settings"
        description="Manage store preferences"
      />
    </div>
  );
};

export default SettingsForm;
