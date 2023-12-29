import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SettingsForm from "./components/SettingsForm";

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}
const SettingsPage: React.FC<SettingsPageProps> = ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const store = prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* @ts-ignore */}
        <SettingsForm initialData={store}/>
      </div>

    </div>
  );
};
